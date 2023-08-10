import "@/app/css/containers.css";
import "@/app/css/login.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/app/globals.css"
import Image from "next/image";
import Link from "next/link";
import img_login from "@/app/assets/images/LOGIN.png";
import InputText from "@/app/components/forms/input-text/input-text";
import ButtonPrimary from "@/app/components/forms/button-primary/button-primary";
import { useState } from "react";
import { loginBody, validateLoginBody } from "@/app/core/repository/login/login-body";
import { handleInput } from "@/app/core/repository/handleInput/handleInput";
import { httpPost } from "@/app/core/http-request-contract";
import { useRouter } from "next/navigation";



export default function Login() {
 const router = useRouter();
  const [values, setValues] = useState(loginBody)
  
  const validateSession = () => {
    if (sessionStorage.getItem("user") != undefined)
    router.push("/home")
  }

  const validateLogin = async () => {
    let validation = validateLoginBody(values)
    if (typeof validation === "string") alert(validation)
    else httpPost("users/login", values).then((response) => {sessionStorage.setItem("user", response.name);}).catch((err) => {console.log(err)});
    validateSession();
  }
  
  return (
    <div>
      <div className="container">
        
        <div className="container-primary mx-auto">
          <Image className="img_login" src={img_login} alt={""} />
          <div className="login">
            <div className="logo">
              <h2>TaskM</h2>
            </div>
            <form className="form-login">
              <h2 className="title-login">
                Sign in<br />
                TaskMaster
              </h2>
              <hr className="lineTitle" />
              <InputText
                className="email-login"
                type="email"
                hint="E-mail or user"
                id="email"
                handleInput={[handleInput, values, setValues]} value={""} />
              <InputText
                className="passwordL"
                type="password"
                hint="Password"
                id="password"
                handleInput={[handleInput, values, setValues]} value={""}              />
              <div className="forgotPasswordL">
                <Link href={"/recover"}>Forgot your password?</Link>
              </div>
              <div className="btn-login">
                <ButtonPrimary className="btn-next" text="Next" callBack={() => {validateLogin()}} />
              </div>
              <div className="register-login">
                You are not a member yet? <Link href={"/register"}>Sign up here!</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

