import React from "react";
import {Todolist} from "./Component/Todolist";
import s from "./HW3.module.css"

function HW3() {
    const tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ]

    const tasks2 = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false}
    ]

    return (
        <>
            <div className={s.todolist}>
                <Todolist title={"What to learn"} tasks1={tasks1}/>
                <Todolist title={"Song"} tasks1={tasks2}/>
                <Todolist title={"Books"} tasks1={tasks1}/>
            </div>
            <hr/>
        </>
    );
}

export default HW3