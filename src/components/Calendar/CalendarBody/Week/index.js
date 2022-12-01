import { addDays} from 'date-fns';
import { parse } from 'date-fns';
import Day from '../Day';
import React from 'react';
import style from '../../Calendar.module.css'

const Week = (props) => {
    const {year, month, week,activeDay, fnchange} = props;
    const startOfWeek = parse(`${year} ${week}`, 'Y ww', new Date()) // Получает дату начала недели

// Делаем пустой массив с 7 эелментов и потом  мапом проходим по каждому и возвращаем в него компонент дня и передаем в пропсах его день
    const arr = new Array(7)
    .fill(null)
    .map((el, index) => <Day day ={addDays(startOfWeek, index)} key={index} month={month} activeDay = {activeDay} fnchange = {fnchange}/>)



    return (

        <tr className={style.row} >{arr}</tr>
    );
}

export default Week;

// for (const div of userArray) {
//     div.addEventListener('click', (event) => {
//         userArray.forEach(element=>{element.classList.add('wrapperOf')
//         element.classList.remove('wrapperOn')})
//         event.currentTarget.classList.toggle('wrapperOn');
//         event.currentTarget.classList.toggle('wrapperOf');
//     })