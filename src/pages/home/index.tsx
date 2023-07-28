import "@/app/css/containers.css";
import "@/app/css/home.css";
import "bootstrap/dist/css/bootstrap.css";
import img_create_task from "@/app/assets/images/CREAR-TAREA.png";
import img_profile_photo from "@/app/assets/images/PROFILE-PHOTO.png"
import img_create_plus from "@/app/assets/images/CREATE-PLUS.png"
import Image from "next/image";
import ButtonPrimary from "@/app/components/forms/button-primary/button-primary";
import router from "next/router";
import { useState } from "react";
import React from "react";
import { httpGet } from "@/app/core/http-request-contract";
import ContainerTask from "@/app/components/container-task/container-task";


export const taskModel = {id: 1, title: "", datetime: "", priority:"", description: ""}

export default function Home() {
  const [tasks, setTask] = useState(taskModel)

  //El useEffect es para que se mande la petición al backend solo una vez
  React.useEffect(() => { //Con esto hago el llamado al backend desde el front
    httpGet("tasks").then((data) => {
    setTask(data)
    console.log(data)
  }).catch((error) => console.log(error))
  //Llamo a task entonces me muestra la data que hay en el y si sale error entonces se me muestra el error (500 o 400)
  },[])

  const results = tasks.map((task) => {
    <div key={task.id}>
      <ContainerTask task={task}/>
      <br/>
    </div>
  });
  
  return (
    <div>
      <div className="container">
        <div className="container-primary mx-auto">
          <Image className="img_create_task" src={img_create_task} alt={""} />
          <div className="create_task">
          <div className="sign-out">Sign out</div>
            <Image className="profile-photo" src={img_profile_photo} alt=""></Image>
            <div className="container">
              {tasks.length > 0 ?(
              <div className="row">
                {results}
              </div>
            ): (
              <div>
              <Image className="create-plus" src={img_create_plus} alt="" ></Image>
              </div>
            )}
            </div>
            <ButtonPrimary className="btn-create" text="Create Task" callBack={() => {router.push("/task/create")}} />
            <div className="logo">
              <h2>TaskM</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}