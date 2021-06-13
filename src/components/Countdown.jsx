import React, { useState, useEffect, useRef }from 'react';



const Countdown=()=>{
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef()

    const startTime =()=>{
        const contdownDate = new Date('Jun 27, 2021 00:00:00').getTime()

        interval = setInterval(()=>{
            const now = new Date().getTime()
            const distance = contdownDate - now


            const days = Math.floor(distance / (1000 * 60  * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60  * 60 * 24)/(1000 * 60 * 60)))
            const minutes = Math.floor((distance % (1000 * 60  * 60))/(1000*60))
            const seconds = Math.floor((distance % (1000 * 60 ))/1000)

            if (distance < 0){
                // stop timer on 0 
                clearInterval(interval.current)

            }else {
                //update the timer 
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
        },1000)
    }




    useEffect(()=>{
        startTime();
        return()=>{
            clearInterval(interval.current)
        }
    })
return(
    <div className="countdown">
        <section>
            <p>{timerDays}</p>
            <p><small className ='clock-text'>Days</small></p>
        </section>
        <span>:</span>
        <section>
            <p>{timerHours}</p>
            <p><small className ='clock-text'>Hours</small></p>
        </section>

        <span>:</span>

        <section>
            <p>{timerMinutes}</p>
            <p><small className ='clock-text'>Minutes</small></p>
        </section>

        <span>:</span>

        <section>
            <p>{timerSeconds}</p>
            <p><small className ='clock-text'>Seconds</small></p>
        </section>

    </div>
    
)
}


export default Countdown;