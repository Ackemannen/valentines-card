import React, { useRef, useState } from 'react'
import './home.css'
import background from '../../assets/background.jpg'
import snoopy1 from '../../assets/snoopy1.gif'
import snoopy0 from '../../assets/snoopy0.gif'

function Home({ showHome, setShowHome, setShowValentine }) {

    const [questionIndex, setQuestionIndex] = useState(0);
    const yesButtonRef = useRef(null);
    const [btnScale, setBtnScale] = useState(1);
    const questions = [
        "Vill du vara min alla hjärtarns?",
        "Vill du vara min alla hjärtarns? snälla...",
        "Snälla söta rara...",
        "Om inte så kommer du såra honom",
        "Du har inget val",
    ];

    const handleNo = () => {
        if (btnScale > 2.1) {
            setBtnScale(4.2);
        } else {
            setBtnScale(prevScale => prevScale * 1.4);
        }
        if (yesButtonRef.current) {
            yesButtonRef.current.style.transform = `scale(${btnScale * 1.3})`;
        }
        setQuestionIndex(prevIndex => (prevIndex + 1) % questions.length);
        console.log(btnScale);
    }

    const handleYes = () => {
        setShowHome(false);
        setShowValentine(true);
    }


  return (
    <div className={`home ${showHome ? '' : 'hidden'}`}>
        <img src={background} alt=""  className='background' />
        <div className="content">
            <div className="question">
                <h1>{questions[questionIndex]}</h1>
            </div>
            <div className='answer'>
                <button 
                    className='btn yes'
                    ref={yesButtonRef}
                    onClick={() => handleYes()}
                >
                    Ja
                </button>
                <button 
                    className='btn no'
                    onClick={() => handleNo()}
                >
                    Nej
                </button>
            </div>
            <div className={`gifs ${questionIndex === 3 ? '' : 'hidden'}`}>
                <img src={snoopy0} alt='' />
                <img src={snoopy1} alt='' />
            </div>
        </div>
    </div>
  )
}

export default Home