import React from 'react'
import cl from './Affair.module.css'
import {AffairType} from "./HW2";


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number)=> void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    const priorityClass = cl[props.affair.priority]

    return (
        <div className={cl.affair}>
            <div>{props.affair.name}</div>
            <div className={priorityClass}>{props.affair.priority}</div>
            <button className={cl.button} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
