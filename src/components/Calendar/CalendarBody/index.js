import { format } from 'date-fns';
import React from 'react';
import Month from './Month';
import style from '../Calendar.module.css'

const CalendarBody = (props) => {
    const weekDays = ['S', 'M', 'T', 'W', "T", 'F', 'S'];
    const {day, activeDay, fnchange} = props
    const month = format(day, 'M')
    const monthForTitle = format(day, 'MMMM')
    const year = format(day, 'y') // вытягиваем месяц и год(11 2022)

    return (
        <div className={style.calendar}>
            <table>
                <caption className={style.date}>{monthForTitle} {year}</caption>
                <thead >
                    <tr className={style.dayname}>
                        {weekDays.map((day) => <td>{day}</td>)}
                    </tr>
                </thead>
                <Month month = {month} year = {year} activeDay = {activeDay} fnchange = {fnchange}/>
            </table>
        </div>
    );
}

export default CalendarBody;
