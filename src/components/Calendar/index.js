import React, { Component } from 'react';
import { DateContext } from '../../context';
import CalendarBody from './CalendarBody';
import CurrentDay from './CurrentDay';
import style from './Calendar.module.css'

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDay: new Date(),
        }
    }

    changeActive = (day) => {
        this.setState({
            activeDay: day
        })
    }

    render() {
        const currentDay = new Date();
        const {activeDay} = this.state
        return (
            <DateContext.Provider value = {[currentDay, activeDay, this.changeActive]}>
                <section className={style.container}>
                    <CurrentDay/>
                    <CalendarBody/>
                </section>
            </DateContext.Provider>
        );
    }
}

export default Calendar;