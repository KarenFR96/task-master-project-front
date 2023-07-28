import "@/app/css/containers.css";
import "@/app/css/recover.css";
import "bootstrap/dist/css/bootstrap.css";
import img_recover from "@/app/assets/images/RECUPERACION-CON.png";
import Image from "next/image";
import InputText from "@/app/components/forms/input-text/input-text";
import ButtonPrimary from "@/app/components/forms/button-primary/button-primary";
import Link from "next/link";
import React, { useState } from "react";
import { registerBody, validateRegisterBody } from "@/app/core/repository/register/register-body";
import { handleInput } from "@/app/core/repository/handleInput/handleInput";


export default function RecoverPasssword() {
const [values, setValues] = useState(registerBody);

  return (
    <div>
      <div className="container">
        <div className="container-primary mx-auto">
          <Image className="imgrecover" src={img_recover} alt={""} />
          <div className="recover">
            <div className="logo">
              <h2>TaskM</h2>
            </div>
            <form>

              <InputText
                className="emailRecover"
                type="email"
                hint="E-mail"
                id="email"
                handleInput={[handleInput, values,setValues]}
              />
        

              <div className="btn">
                <ButtonPrimary className="btn-recover" text="Recover Password" callBack={() => {
                    alert(validateRegisterBody(values))
                }} />
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