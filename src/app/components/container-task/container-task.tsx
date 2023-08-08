import "bootstrap/dist/css/bootstrap.css";
import "@/app/components/container-task/containerTask.css"
import img_close from "@/app/assets/images/close.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { httpDelete } from "@/app/core/http-request-contract";
import router from "next/router";
import { taskModelSingle } from "@/pages/home";


export default function ContainerTask(props: {task: any}){
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.js");
    }, []); //Importación del paquete de bootstrap

    const taskModel =[taskModelSingle]
    const [values, setValues] = useState(taskModel);
    
    const deleteTasks = () => {
        httpDelete("tasks", values, props.task?.id + "")
          .then((response) => {
            console.log(response);
            router.push("/home");
          })
          .catch((error) => {
            console.log(error);
          });
      };

        return (
            <div className=" task col" >
                <div className="imgC">
                <Image
                    className="close"
                    src={img_close}
                    alt=""
                    onClick={() => {
                        deleteTasks();
                    }} />
                </div>

                <div className=" titleT list-group-item  text-center text-uppercase">{props.task.title}</div>
                <div className=" titleT list-group-item  text-center text-uppercase">{props.task.priority}</div>
                    <div className="btnItems">
                    <button type="button" className="btn " data-bs-toggle="modal" data-bs-target={"#task" + props.task.id}                   >
                        Detail 
                    </button>
                    <br />
                    <Link className="btnE form-control " href={"/task/" + props.task.id}> Edit </Link>
                    </div>
                 

                    <div className="d-flex justify-content-center align-items-center">
                    <div
                        className="modal fade"
                        id={"task" + props.task.id}
                        aria-labelledby="taskLabel"
                        aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-uppercase" id="taskLabel">
                                        {props.task.title}
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    {props.task.id}
                                    {props.task.name}
                                    {props.task.description}
                                    {props.task.priority}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}