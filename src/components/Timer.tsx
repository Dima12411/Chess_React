import React, { FC, useEffect, useRef, useState } from 'react';
import { Player } from "../models/Player";
import { Colors } from "../models/Colors";

interface TimerProps {
    currentPlayer: Player | null
    restart: () => void
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
    const [blackTime, setBlackTime] = useState(300)
    const [whiteTime, setWhiteTime] = useState(300)
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect(() => {
        startTimer()
    }, [currentPlayer])

    const startTimer = () => {
        if (timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
    }
    const decrementBlackTimer = () => {
        setBlackTime(prev => prev - 1)
    }
    const decrementWhiteTimer = () => {
        setWhiteTime(prev => prev - 1)
    }

    return (
        <div>
            <div>
                <button onClick={ restart }>Restart game</button>
            </div>
            <h2>Черные - { blackTime }</h2>
            <h2>Белые - { whiteTime }</h2>
        </div>
    );
};

export default Timer;