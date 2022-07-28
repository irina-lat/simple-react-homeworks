import React from 'react'
import s from './Error404.module.css'


function Error404() {
    return (
        <div className={s.main}>
            <div className={s.textError}>
                <div>404</div>
                <div>Page not found! 🙂</div>
            </div>
        </div>
    )
}

export default Error404
