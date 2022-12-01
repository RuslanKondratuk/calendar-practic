import { format} from 'date-fns';
import getWeeksInMonth from 'date-fns/getWeeksInMonth';
import React from 'react';
import Week from '../Week';

const Month = (props) => {
    const {month, year, activeDay, fnchange} = props
    const weekOfYear = Number(format(new Date(`${year} ${month}`), 'w')) // Получаем какая первая неделя нужного месяца в году по счету (45)
    const weekOfMonth = getWeeksInMonth(new Date(`${year}, ${month}`)) // Получаем сколько недель в нужном месяцу (5)


    // Делаем массив и пушим туда элементы недели в зависимости от количества недель в месяце и передаем какая эта неделя в году прибавляя к каждой новой по одной в зависимости сколько недель в нужном месяце
    const arrayWeek = []
    for (let i = 0; i < weekOfMonth; i++) {
       arrayWeek.push(<Week year = '2022' month={month} week = {weekOfYear+i} key = {weekOfYear+i} activeDay = {activeDay} fnchange = {fnchange}/>);
    }

    // Делаем метод мэп который возвращает элементы с массива при вызови функции в рендер
    const mapWeek = () => {
        return arrayWeek.map(el => el)
    }
    return (
        <tbody>

            {mapWeek()}
        </tbody>

    );
}

export default Month;

// return list.map(elem => <List text={elem.body} key={elem.id} id={elem.id} parentDel ={this.delete}/>);