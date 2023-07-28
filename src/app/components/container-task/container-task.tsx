import "bootstrap/dist/css/bootstrap.css";
export default function ContainerTask(props: {task: any}){
    return (
        <div className="col-2">
            <div className="list-group">
                <div className="list-group-item text-center text-uppercase">{props.task.title}</div>
                <div className="list-group-item">{props.task.description}</div>
            </div>
            <br/>
        </div>
    )
}