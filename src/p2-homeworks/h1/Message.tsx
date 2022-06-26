import React from 'react'
import s from './Message.module.css'


type Message = {
    messageData: messageType[]
}

type messageType = {
    avatar: any,
    name: string,
    message: string,
    time: string
}

export const Message = (props: Message) => {
    return (
        <>
            {props.messageData.map((messageArray, index) => {
                    return (
                        <div className={s.message} key={index} >
                            <div className={s.avatar}>
                                <img src={messageArray.avatar} alt="avatar"/>
                            </div>
                            <div className={s.place}>
                                <div>
                                    <h3>{messageArray.name}</h3>
                                    <p>{messageArray.message}</p>
                                    <time>{messageArray.time}</time>
                                </div>
                            </div>
                        </div>
                    )
                }
            )}

        </>
    )
}


