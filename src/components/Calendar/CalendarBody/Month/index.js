import { format} from 'date-fns';
import getWeeksInMonth from 'date-fns/getWeeksInMonth';
import React from 'react';
import Week from '../Week';
import withDate from '../../../../HOCs/withDate';

const Month = (props) => {
                const {month, year} = props

                const weekOfYear = Number(format(new Date(`${year} ${month}`), 'w')) // Получаем какая первая неделя нужного месяца в году по счету (45)

                const weekOfMonth = getWeeksInMonth(new Date(`${year}, ${month}`)) // Получаем сколько недель в нужном месяцу (5)

                // Делаем массив и пушим туда элементы недели в зависимости от количества недель в месяце и передаем какая эта неделя в году прибавляя к каждой новой по одной в зависимости сколько недель в нужном месяце
                const arrayWeek = []
                for (let i = 0; i < weekOfMonth; i++) {
                arrayWeek.push(<Week week = {weekOfYear+i} key = {weekOfYear+i}/>);
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

const wrappedDate = withDate(Month)

export default wrappedDate;



