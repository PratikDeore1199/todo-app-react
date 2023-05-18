import { useState } from "react"

const DatePicker = (props) => {

    return (
        
        <input
         className="form-control w-25"
         type="date"
         value={props.taskDate}
         onChange={(e)=>{
            props.setTaskDate(e.target.value)
         }}
         placeholder="Enter task date"></input>
    )
}

export default DatePicker