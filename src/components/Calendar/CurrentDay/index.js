import { format } from 'date-fns';
import React from 'react';
import style from '../Calendar.module.css'

const CurrentDay = (props) => {
    const {activeDay} = props
    console.log(activeDay)
    return (
        <div className={style.dask}>
            <p className={style.mainDay}>{format(activeDay, 'cccc')}</p>
            <p className={style.mainData}>{format(activeDay, 'd')}</p>
        </div>
    ); // вытягиваем из даты через функцию format название дня и число дня
}

export default CurrentDay;
