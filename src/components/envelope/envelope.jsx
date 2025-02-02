import React, { useState } from 'react'
import './envelope.css'

function Envelope({ showEnvelope, setShowEnvelope, setShowHome }) {

    const [transitioner, setTransitioner] = useState(false);

    const handleClick = () => {
        setTransitioner(!transitioner)
        setTimeout(() => {
            setShowHome(true);
            setShowEnvelope(false);
        }, 2000);
    }

  return (
    <div className={`envelope-container ${showEnvelope ? '' : 'hidden'}`}>
        <div
            class={`wrapper ${transitioner ? 'hidden' : ''}`}
            onClick={handleClick}
        >
            <div class="lid one"></div>
            <div class="lid two"></div>
            <div class="envelope"></div>
            <div class="letter">
                <p>Hej</p>
            </div>
        </div>
        <div className={`transitioner ${transitioner ? '' : 'hidden'}`}></div>
    </div>
  )
}

export default Envelope