import { format } from "date-fns"
import React from "react"
import { DateContext } from "../../context"

const withDate = (Component) => (props) => {

    return  <DateContext.Consumer>
                {([day, activeDay, fnChange]) => {
                    const month = format(day, 'M')// вытягиваем месяц и год(11 2022)
                    const year = format(day, 'y')
                    return <Component day={day} activeDay={activeDay} fnChange={fnChange} month={month} year = {year} {...props}/>
                }}
            </DateContext.Consumer>
}

export default withDate;

