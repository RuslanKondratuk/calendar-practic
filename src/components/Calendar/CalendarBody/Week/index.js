import { addDays} from 'date-fns';
import { parse } from 'date-fns';
import Day from '../Day';
import React from 'react';
import style from '../../Calendar.module.css'
import withDate from '../../../../HOCs/withDate';

const Week = (props) => {
                const {year, month, week, activeDay, fnChange} = props;

                const startOfWeek = parse(`${year} ${week}`, 'Y ww', new Date()) // Получает дату начала недели

                // Делаем пустой массив с 7 эелментов и потом  мапом проходим по каждому и возвращаем в него компонент дня и передаем в пропсах его день
                const arr = new Array(7)
                .fill(null)
                .map((el, index) => <Day day={addDays(startOfWeek, index)} key={week+index+month+week} month={month} activeDay={activeDay} fnChange={fnChange}/>)
                return (
                    <tr className={style.row} >{arr}</tr>
                );

}


const wrappedDate = withDate(Week)

export default wrappedDate;


