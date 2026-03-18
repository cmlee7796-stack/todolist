import React, {useState} from 'react';
export const Timer : React.FC = () =>{
    const [seconds, setSeconds] = useState<number>(0);

    return (
        <div>
            <h2> 타이머 : {seconds}초</h2>
            <button onClick={() => {
                setInterval(() => {
                    setSeconds((prev) => prev + 1);
                }, 1000);
            }}>시작</button>

        </div>
    )
}

export const Clock : React.FC = () =>{
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    setInterval(() =>{
        setTime(new Date().toLocaleTimeString());
    }, 1000);
    return (
        <div>
            현재 시각 : {time}
        </div>
    )
}
