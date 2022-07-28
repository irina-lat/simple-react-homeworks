import React from 'react'
import s from "./Message.module.css";

type AlternativeMessagePropsType = {
    messageData: AlternativeMessageType[]
}

type AlternativeMessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

export function AlternativeMessage(props: AlternativeMessagePropsType) {
    return (
        <>
            {props.messageData.map((alternativeMessageArray, index) => {
                    return (
                        <div className={s.message} key={index}>
                            <div className={s.avatar}>
                                <img src={alternativeMessageArray.avatar} alt="avatar"/>
                            </div>
                            <div className={s.place}>
                                <div>
                                    <h3>{alternativeMessageArray.name}</h3>
                                    <p>{alternativeMessageArray.message}</p>
                                    <time>{alternativeMessageArray.time}</time>
                                </div>
                            </div>
                        </div>
                    )
                }
            )}
        </>
    )
}

