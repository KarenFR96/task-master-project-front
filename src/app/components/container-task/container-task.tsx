import "bootstrap/dist/css/bootstrap.css";
import "@/app/components/container-task/containerTask.css"
import img_close from "@/app/assets/images/close.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { httpDelete } from "@/app/core/http-request-contract";
import { taskModelSingle } from "@/pages/home";
import Swal from "sweetalert2";
import router from "next/router";


export default function ContainerTask(props: {task: any}){
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.js");
    }, []); //Importación del paquete de bootstrap

    const taskModel =[taskModelSingle]
    const [values, setValues] = useState(taskModel);
    
    const deleteTasks = () => {
        httpDelete("tasks", values, props.task?.id + "")
            .then(() => {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((response) => {
                    if (response.isConfirmed) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        ).then(() => {
                            location.reload();
                        });
                    } else if (response.dismiss === Swal.DismissReason.cancel) {
                        router.push("/home");
                    }
                    console.log(response);
                });
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

                <div className=" title-task list-group-item  text-center text-uppercase">{props.task.title}</div>
                <div className=" list-group-item  text-center">Priority: {props.task.priority}</div>
                    <div className="btnItems">
                    <button type="button" className="info-task  " data-bs-toggle="modal" data-bs-target={"#task" + props.task.id}                   >
                        Detail 
                    </button>
                    <br />
                    <Link className="btn btn-success edit-task" href={"/task/" + props.task.id}> Edit </Link>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                    <div
                        className="  modal fade"
                        id={"task" + props.task.id}
                        aria-labelledby="taskLabel"
                        aria-hidden="true">
                        <div className=" modal-dialog">
                            <div className="detail-task modal-content">
                                <div className="modal-header">
                                    <h5 className="detail-task-title  modal-title text-uppercase " id="taskLabel">
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
                                    <div>Id: {props.task.id}</div>
                                    <div>Expiration date: {props.task.datetime}</div> 
                                    <div>Description: {props.task.description}</div> 
                                    <div>Priority: {props.task.priority} </div></div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
    )
}