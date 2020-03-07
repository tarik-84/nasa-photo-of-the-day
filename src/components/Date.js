import React, { useState } from "react";

const Date = () => {

const [date, setDate] = useState();

function handleDAte (e) {
    setDate(e.target.value)
    e.preventDefault()
    console.log(date)
}

    return (
       <div>
          <form>
            <input type='text'  id='myData' placeholder='Date (YYYY/MM/DD)' onChange={handleDAte}/>
            <button>Submit</button>
          </form> 
       </div>
   )
}

export default Date;