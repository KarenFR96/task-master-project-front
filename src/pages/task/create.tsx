import "@/app/css/containers.css";
import "@/app/css/create.css";
import "bootstrap/dist/css/bootstrap.css";
import img_create from "@/app/assets/images/CREATE.png";
import Image from "next/image";
import InputText from "@/app/components/forms/input-text/input-text";
import ButtonPrimary from "@/app/components/forms/button-primary/button-primary";
import { useState } from "react";
import { handleInput } from "@/app/core/repository/handleInput/handleInput";
import { taskModel } from "@/pages/home";
import { httpPost } from "@/app/core/http-request-contract";


export default function CreateTask() {
  const [values, setValues] = useState(taskModel)

  const CreateTasks=()=>{
    httpPost("task", values).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <div>
      <div className="container">
        <div className="container-primary mx-auto">
          <Image className="imgCreate" src={img_create} alt={""} />
          <div className="createTask">
            <div className="logo">
              <h2>TaskM</h2>
            </div>
            <form>
              <InputText
                className=""
                type="text"
                hint="Title"
                id="title"
                handleInput={[handleInput, values, setValues]} value={""}              />
              <InputText
                className=""
                type="date"
                hint="Date time"
                id="dateTime"
                handleInput={[handleInput, values, setValues]} value={""}              />
               <InputText
                className=""
                type="number"
                hint="Priority"
                id="priority"
                handleInput={[handleInput, values, setValues]} value={""}              />

              <InputText
                className=""
                type="text"
                hint="Description"
                id="description"
                handleInput={[handleInput, values, setValues]} value={""}              />
             
              <div className="">
                <ButtonPrimary className="btn-create-task" text="Create Task" callBack={(CreateTasks())} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}