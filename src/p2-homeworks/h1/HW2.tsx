import {Message} from "./Message";
import React, {useState} from "react";
import {ComponentOne} from "./Component/ComponentOne";
import {ComponentsMoney} from "./Component/ComponentMoney";


function HW2() {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ];

    const [money, setMoney] = useState ([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ]);

    return (
        <div>
            microTasks
            <ComponentOne topCars={topCars} />
            <ComponentsMoney money={money} />
            <hr/>
        </div>
    )
}

export default HW2