import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { httpGet } from "@/app/core/http-request-contract";
import CreateTask from "./create";

export default function EditTask() {
  const [task, setTask] = useState({
    id: 0,
    title: "",
    datetime: "",
    priority: "",
    description: "",
  });
  const [render, renderTask] = useState(<CreateTask />);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath !== router.route) {
      /*Llamado al API o peticiones (httpGet del http-request-contract)*/
      httpGet("tasks/" + router.query.id)
        .then((response) => { //.then para saber si devolvió todo correctamente
          setTask(response);
          console.log(response);
          renderTask(<CreateTask task={task} />);
        })
        .catch((error) => console.log(error)); //. catch para saber si hay un error
    }
  }, [router.isReady]);

  return <div>{task.id != 0 ? <CreateTask task={task} /> : (<div></div>)}</div>;
}
