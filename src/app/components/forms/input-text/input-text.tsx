import "@/app/components/forms/input-text/input-text.css"
import { useEffect, useState } from "react";

export default function InputText(props: { className: string,  type: string, hint: string, id: string, handleInput: any[], value?: string }) {

    const [text, setText] = useState('');
    useEffect(() => { if (props.value != null) { setText(props.value) } }, [props.value])

    return (       
            <input className={props.className} type={props.type} placeholder={props.hint} id={props.id} value={text} name={props.id} onChange={e => {
                setText(e.target.value)
                props.handleInput[0](e, props.handleInput[1], props.handleInput[2])
            }} />
    )
}