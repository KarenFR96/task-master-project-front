import "@/app/css/containers.css";
import "@/app/css/register.css";
import "bootstrap/dist/css/bootstrap.css";
import img_signUp from "@/app/assets/images/REGISTRO.png";
import Image from "next/image";
import InputText from "@/app/components/forms/input-text/input-text";
import ButtonPrimary from "@/app/components/forms/button-primary/button-primary";
import Link from "next/link";



export default function Register() {

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
                handleInput={[]} value={""}
              />
              <InputText
                className="lastName"
                type="text"
                hint="Last Name"
                id="lastName"
                handleInput={[]} value={""}
              />
              <InputText
                className=""
                type="email"
                hint="E-mail or user"
                id="email"
                handleInput={[]} value={""} />
              <InputText
                className="password"
                type="password"
                hint="Password"
                id="password"
                handleInput={[]} value={""}
              />

              <div>
                <ButtonPrimary className="btn-signUp" text="Create Account" callBack={() => {}} />
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