import "@/app/css/containers.css";
import "@/app/css/create.css";
import "bootstrap/dist/css/bootstrap.css";
import img_create1 from "@/app/assets/images/CREAR-TAREA.png";
import Image from "next/image";
import InputText from "@/app/components/forms/input-text/input-text";
import ButtonPrimary from "@/app/components/forms/button-primary/button-primary";
import { useEffect, useState } from "react";
import { handleInput } from "@/app/core/repository/handleInput/handleInput";
import { taskModel, taskModelSingle } from "@/pages/home";
import { httpPost, httpPut } from "@/app/core/http-request-contract";
import router from "next/router";

export default function CreateTask(props: { task?: typeof taskModelSingle }) {
  const [values, setValues] = useState(taskModel);

  //Validaciones
  useEffect(() => {
    if (props.task?.title != "" && props.task != null) {
      setValues([props.task]);
    }
  }, [props.task]);

  const createTasks = () => {
    httpPost("tasks", values)
      .then((response) => {
        console.log(response);
        router.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateTask = () => {
    // Evento: Actualizar tarea
    httpPut("tasks", values, props.task?.id + "")
      .then((response) => {
        console.log(response);
        router.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function setDate(date?: string): string {
    var dateArray = date?.split("T");
    try {
      return dateArray!![0];
    } catch (e: any) {
      return "";
    }
  }

  return (
    <div>
      <div className="container">
        <div className="container-primary mx-auto">
          <Image className="imgCreate" src={img_create1} alt={""} />
          <div className="createTask">
            <div className="logo">
              <h2>TaskM</h2>
            </div>
            <form>
              <InputText
                className="title"
                type="text"
                hint="Title"
                id="title"
                handleInput={[handleInput, values, setValues]}
                value={props.task?.title}
              />
              <InputText
                className="dateT"
                type="date"
                hint="Date time"
                id="datetime"
                handleInput={[handleInput, values, setValues]}
                value={setDate(props.task?.datetime)}
              />
              <InputText
                className="priority"
                type="number"
                hint="Priority"
                id="priority"
                handleInput={[handleInput, values, setValues]}
                value={props.task?.priority}
              />

             
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <InputText
                  className="description form-control"
                  type="text"
                  hint=""
                  id="description"
                  handleInput={[handleInput, values, setValues]}
                  value={props.task?.description}
                />
              </div>

              {props.task?.id != null ? ( //si props.task.id es diferente de nulo entonces... (esto es un if/else)
                <ButtonPrimary
                  text="Update Task"
                  className={"btn-create-task"}
                  callBack={() => {
                    updateTask();
                  }}
                />

                
              ) : (
                <ButtonPrimary
                  text="Create Task"
                  callBack={() => {
                    createTasks();
                  }}
                  className={"btn-create-task"}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
