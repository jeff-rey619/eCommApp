import React , {useState} from "react";
import './CSS/Loginsignup.css'

function LoginSignup() {

    const [Login, setLogin] = useState("Login")
    const [formData, setFormdata] = useState({
        username: "",
        password: "",
        email:""
    })
    
    const changeHandler = (e) => {
        setFormdata({...formData , [e.target.name]:e.target.value})
    }
    

   async function LoginUp() {
         let responseData;
        await fetch('http://localhost:4000/login', {
              method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            
                },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((res) => {
            responseData=res
            })
        
        if (responseData.success   ) {
            console.log(responseData)
            localStorage.setItem("auth-token", responseData.token);
            window.location.replace("/")
        }
        else {
            alert(responseData.errors)
        }
    }

    async function SignUp() {
        let responseData;
        await fetch('http://localhost:4000/signup', {
              method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            
                },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((res) => {
            responseData=res
            })
        
        if (responseData.success   ) {
            console.log(responseData)
            localStorage.setItem("auth-token", responseData.token);
            window.location.replace("/")
        }
        else {
            alert(responseData.errors)
        }
    }
    
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{ Login}</h1>
                <div className="loginsignup-fields">
                  {Login==="Sign up" ?<input type="text" name="username" value={formData.username} onChange={changeHandler} placeholder="Your name" />:<></>}  
                    <input type="email" name="email" value={formData.email} onChange={changeHandler} placeholder="Your Email address" />
                    <input type="password"name="password"  value={formData.password} onChange={changeHandler} placeholder="password" />
                </div>

                <button onClick={() => {
                    if (Login == 'Login') {
                        LoginUp()
                    }
                    else {
                        SignUp()
                    }
                }}>
                    Continue
                </button>
                {
                    Login==="Sign up" ? <p className="loginsignup-login">
                    Already have an account ? <span onClick={()=>{
                        setLogin("Login")
                    }}>Login here</span>
                    </p> :
                         <p className="loginsignup-login">
                    Create an account ? <span onClick={()=>{
                        setLogin("Sign up")
                    }}>Click here</span>
                </p>
                }
               

               

                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup