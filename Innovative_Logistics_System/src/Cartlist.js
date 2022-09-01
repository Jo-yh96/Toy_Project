import List from "./pages/list/List";
// import { useNavigate } from "react-router-dom";
import "./style.css"

const Cartlist = () => {
    // const navigate = useNavigate();
    return (
        <main>
        <section className="container py-5 ">
        <h1 className="fw-light text-center">주문 리스트</h1>
                <p className="lead text-muted text-center">
                    Cart 앱을 사용해서 바코드를 인식해 주세요
                </p>
            {/* <div className="row py-lg-5"> */}
                <List />
            {/* </div> */}
        </section>
    </main>
    )   
}

export default Cartlist;