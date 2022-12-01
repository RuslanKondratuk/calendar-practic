import React, { Component } from 'react';
import CalendarBody from './CalendarBody';
import CurrentDay from './CurrentDay';
import style from './Calendar.module.css'

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: new Date(),
            activeDay: new Date(),
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