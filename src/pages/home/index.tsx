import "@/app/css/containers.css";
import "@/app/css/home.css";
import "bootstrap/dist/css/bootstrap.css";
import img_create_task from "@/app/assets/images/CREATE.png";
import img_create_plus from "@/app/assets/images/CREATE-PLUS.png";
import Image from "next/image";
import ButtonPrimary from "@/app/components/forms/button-primary/button-primary";
import router from "next/router";
import { useState } from "react";
import React from "react";
import { httpGet } from "@/app/core/http-request-contract";
import ContainerTask from "@/app/components/container-task/container-task";
import Tasks from "@/app/components/forms/login-singout/login-signout";

export const taskModelSingle = {
  id: 1,
  title: "",
  datetime: "",
  priority: "",
  description: "",
};

export const taskModel =[taskModelSingle]

export default function Home() {
  const [tasks, setTask] = useState(taskModel);

  //El useEffect es para que se mande la petición al backend solo una vez
  React.useEffect(() => {
    //Con esto hago el llamado al backend desde el front
    httpGet("tasks")
      .then((data) => {
        setTask(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
    //Llamo a task entonces me muestra la data que hay en el y si sale error entonces se me muestra el error (500 o 400)
  }, []);

  const results = tasks.map((task) =>
  <ContainerTask key={task.id} task={task} />
);

  const handleSignOut = () => {
    sessionStorage.removeItem("user");
    router.push('/')
};


  return (
    <div>
      <div className="container">
        <div className="container-primary-home mx-auto">
          
          <Image className="img_create_task" src={img_create_task} alt={""} />
          <div className="create_task">

            <div className="home-sign-out">
            <div className="sign-out" onClick={handleSignOut}>Sign out</div>
            </div>
           
            <div className="logo-home">
              <h2>TaskM</h2>
            </div>

           <div className="msg-user">Hi <Tasks/> Welcome!</div> 
       
            <div className="">
              {tasks.length > 0 ? (
                <div className="row">{results}</div>
              ) : (
                <div>
                  <Image
                    className="create-plus"
                    src={img_create_plus}
                    alt=""
                    onClick={() => {
                      router.push("/task/create");
                    }}
                  ></Image>
                </div>
              )}
            </div>
            <ButtonPrimary
              className="btn-create"
              text="Create Task"
              callBack={() => {
                router.push("/task/create");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
