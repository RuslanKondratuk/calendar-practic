import { format } from 'date-fns';
import React from 'react';
import withDate from '../../../HOCs/withDate';
import style from '../Calendar.module.css'

const CurrentDay = (props) => {
    const {activeDay, fnChange} = props
    console.log(fnChange)
    return (
        <div className={style.dask}>
            <p className={style.mainDay}>{format(activeDay, 'cccc')}</p>
            <p className={style.mainData}>{format(activeDay, 'd')}</p>
        </div>
    ); // вытягиваем из даты через функцию format название дня и число дня
}

const wrappedDate = withDate(CurrentDay)

export default wrappedDate;
