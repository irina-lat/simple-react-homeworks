import React from 'react'
import s from '../../p1-main/m1-ui/u1-app/App.module.css'
import HW1 from './HW1'
import HW2 from "../h2/HW2";



function App() {
    return (
        <div className={s.App}>
            <div>react homeworks:</div>
            <HW1/>
            <HW2/>
        </div>
    )
}

export default App
