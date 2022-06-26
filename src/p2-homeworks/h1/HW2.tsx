import React, {useState} from "react";
import {ComponentOne} from "./Component/ComponentOne";
import {ComponentsMoney} from "./Component/ComponentMoney";
import {Header} from "./Component/Header";
import {Body} from "./Component/Body";
import {Footer} from "./Component/Footer";
import {Button} from "./Component/Button";
import {ButtonNum} from "./Component/ButtonNum";
import {ComponentTwo} from "./Component/ComponentTwo";



function HW2() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ]);

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ];

    let [students, setStudents] = useState([
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
    ]);

    function buttonOne(name: string, age: number) {
        console.log(name, age)
    }

    function buttonTwo(name: string) {
        console.log(name)
    }

    function buttonThree() {
        console.log('Stupid')
    }

    return (
        <div>
            microTasks

            <Header titleForHeader={'New Header'}/>
            <Body titleForBody={'Complete BODY'}/>
            <Footer titleForFooter={'Bye Footer'}/>

            <ComponentOne topCars={topCars} students={students}/>

            <ComponentTwo/>
            <Button name={'YouTube-1'} callBack={()=>buttonOne('Ivan', 18)} />
            <Button name={'YouTube-2'} callBack={()=>buttonTwo('Vasya')} />
            <Button name={'Stupid Button'} callBack={()=>buttonThree()} />
            <ButtonNum />

            <ComponentsMoney money={money}/>

            <hr/>
        </div>
    )
}


export default HW2