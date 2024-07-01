import { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import apirequest from "../../lib/apiRequest";

function Login() {
  const [error, setError] = useState('')
  const [isloading, setisloading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setisloading(true)
    setError("")
        const formData = new FormData(e.target);

        const username = formData.get("username")
        const email = formData.get("email")
        const password = formData.get("password")
      
        try{const res = await apirequest.post("/auth/login",{
          username , password
        })

        localStorage.setItem("user" , JSON.stringify(res.data))
        navigate("/")
      }
        catch(err){
          console.log(err)
          setError(err.response.data.message)
        }
        finally{
          setisloading(false)
        }
  }
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" required minLength = {3} maxLength = {20}type="text" placeholder="Username" />
          <input name="password" required type="password" placeholder="Password" />
          <button disabled = {isloading}>Login</button>
          {
            error && <span>{error}</span>
          }
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;