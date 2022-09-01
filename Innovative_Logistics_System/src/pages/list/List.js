import { useEffect, useState } from "react"
import "../../style.css"
import axios from "axios";
import Barcode from "./Barcode"
import { useLocation } from "react-router";

const List = () => {
  const [data, setData] = useState({});
  const { state } = useLocation();
  async function get() {
      const result = await axios.get(
        'http://3.35.213.205/api/ft/orderlist',{
          headers:{
            'X-Ft-Sessionid':state
          }
        })
          setData(result.data)
          // console.log(result.data)
          // console.log(data)
  }
  useEffect(() => {
    get()
    const interTime = setInterval(()=> get(),10000);
        return ()=> clearInterval(interTime)
  },[])
  return (
    <>
      {
        Array.isArray(data.orderitems) && 
        ( 
          data.orderitems.map((items, index) => {
            const itemStatus = {
              "0": <><br/><p className="status">주문 완료</p><p className="barcodeimg"><Barcode barcodeNumber={items.id}/></p><br/></>,
              "100": <><br/><p className="status100">패킹 시작</p><p className="username">{items.ft_username}</p><br/></>,
              "200": <><br/><p className="status200">패킹 중</p><p className="username">{items.ft_username}</p><br/><br/></>,
              "300": <><br/><p className="status300">패킹 완료</p><p className="username">{items.ft_username}</p><br/></>
            }
            return (
              <>
                <div className="orderList" keys={index}>
                  <div className="textArea">
                  <br/> 
                  <span className="title">{items.company_name} </span>
                  <span className="title">({items.basket_items.length} 품목)</span>
                  <span className="address">{items.company_address}</span>
                  <span className="contact">{items.company_contact}</span>
                  </div>
                  <div className="statusArea">
                  {
                    itemStatus[items.status]
                  }
                  </div>
                </div>
              </>
            )
          }))
        }
    </>
  )
}

export default List