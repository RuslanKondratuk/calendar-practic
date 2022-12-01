import { format } from 'date-fns';
import React from 'react';
import style from '../Calendar.module.css'

const CurrentDay = (props) => {
    const {day,activeDay} = props
    console.log(activeDay)
    return (
        <div className={style.dask}>
            <p className={style.mainDay}>{format(day, 'cccc')}</p>
            <p className={style.mainData}>{activeDay}</p>
        </div>
    ); // вытягиваем из даты через функцию format название дня и число дня
}

export default CurrentDay;
