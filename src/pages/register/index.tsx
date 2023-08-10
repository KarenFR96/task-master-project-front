import "@/app/css/containers.css";
import "@/app/css/register.css";
import "bootstrap/dist/css/bootstrap.css";
import img_signUp from "@/app/assets/images/REGISTRO.png";
import Image from "next/image";
import InputText from "@/app/components/forms/input-text/input-text";
import ButtonPrimary from "@/app/components/forms/button-primary/button-primary";
import Link from "next/link";
import { handleInput } from "@/app/core/repository/handleInput/handleInput";
import { registerBody, validateRegisterBody } from "@/app/core/repository/register/register-body";
import { useState } from "react";
import { httpPost } from "@/app/core/http-request-contract";
import Swal from "sweetalert2";
import router from "next/router";

export default function Register() {
  const [values, setValues] = useState(registerBody)

  const validateLogin = async () => {
    console.log(values)
    let validation = validateRegisterBody(values)
    if (typeof validation === 'string') alert(validation)
    else httpPost("users", values).then((response: any) => { 
          Swal.fire({
            title: 'Success Registration!',
            width: 600,
            padding: '3em',
            color: '#F48C40',
          })
          console.log(response) 
          router.push("/login");})
          .catch((err: any) => { console.log(err) });
}

  return (
    <div>
      <div className="container">
        <div className="container-primary mx-auto">
          <Image className="imgSignUp" src={img_signUp} alt={""} />
          <div className="singUp">
            <div className="logo">
              <h2>TaskM</h2>
            </div>
            <form>
              <h2 className="titleR">
                Sign Up Here!
              </h2>
              <hr className="lineTitleR" />

              <InputText
                className="name"
                type="text"
                hint="Name"
                id="name"
                handleInput={[handleInput, values, setValues]} 
              />
              <InputText
                className="lastName"
                type="text"
                hint="Last Name"
                id="lastName"
                handleInput={[handleInput, values, setValues]} 
              />
              <InputText
                className="email"
                type="email"
                hint="E-mail or user"
                id="email"
                handleInput={[handleInput, values, setValues]}  />
              <InputText
                className="password"
                type="password"
                hint="Password"
                id="password"
                handleInput={[handleInput, values, setValues]} 
              />

              <div>
                <ButtonPrimary className="btn-signUp" text="Create Account" callBack={() => {validateLogin()}} />
              </div>
              <div className="advert-login">
                Already have an account? <Link href={"/login"}>Log in</Link>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}