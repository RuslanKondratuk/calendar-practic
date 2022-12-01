import { format } from 'date-fns';
import React from 'react';
import './style.css'

const Day = (props) => {
    const {month, day, activeDay, fnChange} = props
    const curentDay = format(day, 'd')
    const monthOfDay = format(day, 'M')
    const truDay = format(activeDay, 'd')
    const cn = truDay === curentDay &&  monthOfDay === month ?  'column active' : 'column'

    const handler = () => {
        fnChange(day)
    }

    const daysOfMonth = () =>  month === monthOfDay ? <td className={cn} onClick = {handler}>{curentDay}</td> : <td></td>;

    return (
        <>
            {daysOfMonth()}
        </>

    );
}

export default Day;

