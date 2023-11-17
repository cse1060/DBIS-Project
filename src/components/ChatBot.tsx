import React, { useState } from 'react'
import "@/css/chatbot.css"
import { motion, useDragControls } from "framer-motion"

export default function ChatBot() {
    const [mode, setMode] = useState("btn")

    const controls = useDragControls()

    function startDrag(event: any) {
        controls.start(event)
    }

    if (mode === 'btn') {
        return (
            <button onClick={(e) => {
                e.preventDefault();
                setMode('chatbot');
            }}
                className='chatbot_btn'
            >Assistance!!!</button>
        )
    }
    return (
        <div>
            <div onPointerDown={startDrag} />
            <motion.div drag="x" dragControls={controls} className='chatbot' >
                <div className='drag'>
                    <p className='dots'>.  .  .</p>
                    <p className='title'>Welcome to Property App Assistance</p>
                </div>
                <iframe src="https://interfaces.zapier.com/embed/page/clp0dxhqx003elc0ncbjks3v4?" className='chatbot_frame'></iframe>
                <div className='drag_bot'>
                </div>
            </motion.div>
        </div>
    )
}
