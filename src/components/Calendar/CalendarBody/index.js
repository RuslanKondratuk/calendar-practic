import { format } from 'date-fns';
import React from 'react';
import Month from './Month';
import style from '../Calendar.module.css'
import withDate from '../../../HOCs/withDate';

const CalendarBody = (props) => {
    const {year, day, month} = props
    const weekDays = ['S', 'M', 'T', 'W', "T", 'F', 'S'];
    const monthForTitle = format(day, 'MMMM')
    return (
            <div className={style.calendar}>
                <table>
                    <caption className={style.date}>{monthForTitle} {year}</caption>
                    <thead >
                        <tr className={style.dayname}>
                            {weekDays.map((day) => <td>{day}</td>)}
                        </tr>
                    </thead>
                    <Month key = {month}/>
                </table>
            </div>
    )
}

const wrappedDate = withDate(CalendarBody)

export default wrappedDate;
