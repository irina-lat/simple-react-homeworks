import React from "react";
import s from './Message.module.css'

type MessagePropsType = {
    avatar: any,
    name: string,
    message: string,
    time: any
}

export function Message(props: MessagePropsType) {
    return (
        <>
            <div className={s.message}>
                <div className={s.avatar}>
                    <img src={props.avatar} alt="avatar"/>
                </div>
                <div className={s.place}>
                    <div>
                        <h3>{props.name}</h3>
                        <p>{props.message}</p>
                        <time>{props.time}</time>
                    </div>
                </div>
            </div>
        </>
    )
}



