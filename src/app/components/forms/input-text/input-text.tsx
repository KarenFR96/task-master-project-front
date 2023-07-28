"use client"
import React from "react";
import '@/app/components/forms/input-text/input-text.css'

const InputText = ( props: { className: string, hint: string, type:string, id:string, handleInput: any[], value: string }) => (
    <input className={props.className} type={props.type} placeholder={props.hint} id={props.id} value={props.value} name={props.id} onChange={e => props.handleInput}></input>
)

export default InputText;