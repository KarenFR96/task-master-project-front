"use client"
import React from "react";
import "@/app/components/forms/button-primary/button-primary.css"

export default function ButtonPrimary ( props: { className: string, text: string, callBack: Function  }) {
    return (
        <button className={props.className} type="button" onClick={function(){props.callBack()}}>{props.text}</button>
    )
}

