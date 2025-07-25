import React, { useState, useEffect } from "react";

function DigitalClock() {

    const [time, setTime]= useState(new Date());

    useEffect(()=> {
        const intervalId= setInterval(() => {
            setTime(new Date())
        }, 1000);

        return ()=>{
            clearInterval(intervalId)
        }
    }, [])

    function formatTime() {
        let hours= time.getHours();
        const minutes=time.getMinutes();
        const seconds= time.getSeconds();
        const meridiem= hours>=12? "PM" :"AM";

        hours= hours % 12 || 12;


        return `${padZero(hours)}: ${padZero(minutes)}: ${padZero(seconds)}  ${meridiem}`;
    }

    function padZero(number) {
        return String(number).padStart(2,0)
    }

    return (
        <div className="clockcontainer">
          <div className="clock">
            {formatTime()}
          </div>
        </div>
      )
}

export default DigitalClock