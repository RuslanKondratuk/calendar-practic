import React, { Component } from 'react';
import CalendarBody from './CalendarBody';
import CurrentDay from './CurrentDay';
import style from './Calendar.module.css'
import { format } from 'date-fns';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: new Date(),
            activeDay: format(new Date(), 'd')
        }
    }


    changeActive = (day) => {
        this.setState({
            activeDay: day
        })
    }

    render() {
        const {currentDay, activeDay} = this.state
        return (
            <section className={style.container}>
                <CurrentDay day={currentDay} activeDay={activeDay}/>
                <CalendarBody day={currentDay} activeDay = {activeDay} fnchange = {this.changeActive}/>
            </section>
        );
    }
}

export default Calendar;