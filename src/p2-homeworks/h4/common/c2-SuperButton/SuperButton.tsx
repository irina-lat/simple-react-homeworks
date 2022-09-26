import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'
import {useSelector} from 'react-redux';
// import {AppStoreType} from '../../../h10/bll/store';
import styledTheme from '../../../h12/HW12.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    // const theme = useSelector<AppStoreType, string>(state => state.theme.theme)
    const finalClassName = `${red ? s.red : s.default} ${className}`

    return (
        <button
            // className={`${styledTheme[theme]} ${finalClassName}`}
            className={finalClassName}

            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
