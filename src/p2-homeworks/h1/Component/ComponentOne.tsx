import React from "react";

type ComponentOne = {
    topCars: topCarsType[]
}

type topCarsType = {
    manufacturer: string,
    model: string
}

export const ComponentOne = (props: ComponentOne) => {
    return (
        <div>
            <table>
                {props.topCars.map((topCarsArray, index) => {
                    return (
                        <tbody key={index + 1}>
                        <tr>
                            <th>{topCarsArray.manufacturer}</th>
                            <th>model:{topCarsArray.model}</th>
                        </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>

    )
}