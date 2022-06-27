import React from "react";
import {PageTitle} from "./Component/PageTitle";
import {Rating} from "./Component/Rating";
import {Accordeon} from "./Component/Accordeon";

function HW4() {
    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            Article 1
            <Accordeon titleValue={'Меню'} collapsed={true}/>
            <Accordeon titleValue={'Users'} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

export default HW4

