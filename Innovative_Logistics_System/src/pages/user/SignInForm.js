import axios from "axios"
import {useNavigate} from "react-router"
import { useState} from "react";
import "../../style.css"

const SignInForm = ({signInData, onChangeSignInData}) => {
    
    const navigate = useNavigate();
    const [data, setData] = useState();
    const onClick = async (req, res, next) => {
        try {
        const response = await axios.get(
            'http://3.35.213.205/api/ft/login',{
                params:{
                    userid:signInData.userid,
                    passwd:signInData.passwd
                }
            }
        );
            setData(response.data);
            if(response.data.code === 200){
                navigate("/list", {state: response.data.sessionid})
            }
            
        } catch (e) {
            console.log(e);
        }
    };
    return (
            <form className="container">
                <label htmlFor="userid" className="id-label">ID</label>
                <input type="email"  className="id" value={signInData.userid} onChange={onChangeSignInData} name="userid" id="userid" />
                <label htmlFor="passwd" className="pw-label">Password</label>
                <input type="password" className="pw" value={signInData.passwd} onChange={onChangeSignInData} name="passwd" id="passwd"/>
                <button type="button" className="loginbutton" onClick={onClick} >Login</button>                
            </form>
    )
}

export default SignInForm;