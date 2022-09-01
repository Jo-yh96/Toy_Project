import { useState } from "react";
import SignInForm from "./pages/user/SignInForm.js";
import "./style.css"

const Login = () => {
    const [signInData, setSignInData] = useState({
        userid: "",
        passwd: ""
    })
    const onChangeSignInData = (e) => {
        setSignInData({
            ...signInData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <main>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <p className="blank"></p>
                    <h1 className="display 2">혁신 물류 시스템</h1>
                    <SignInForm signInData={signInData} onChangeSignInData={onChangeSignInData}/>
                </div>
            </section>
        </main>
    );

}

export default Login;