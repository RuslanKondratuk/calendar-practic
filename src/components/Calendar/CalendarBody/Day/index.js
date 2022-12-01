import { format } from 'date-fns';
import React from 'react';
import './style.css'


const Day = (props) => {

    const {month, day, activeDay, fnchange} = props
    const curentDay = format(day, 'd')
    const monthOfDay = format(day, 'M')
    const cn = activeDay === curentDay && month === monthOfDay ? 'column active' : 'column'

    const handler = () => {
        fnchange(curentDay)
    }

    console.log(day)

    const daysOfMonth = () =>  month === monthOfDay ? curentDay : null;

    return (

        <td className={cn} onClick = {handler}>{daysOfMonth()}</td>
    );
}

export default Day;

