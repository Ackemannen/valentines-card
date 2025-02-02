import React from 'react'
import './valentine.css'
import background from '../../assets/background.jpg'
import snoopy3 from '../../assets/snoopy3.gif'
import snoopy4 from '../../assets/snoopy4.gif'
import snoopy5 from '../../assets/snoopy5.gif'
import snoopy2 from '../../assets/snoopy2.gif'

function Valentine() {
  return (
    <div className='valentine'>
        <img src={background} alt=""  className='background' />
        <div className="valentine-content">
            <div className="valentine-text">
                <p>&#x2764; &#x2764; &#x2764; &#x2764; &#x2764; &#x2764; &#x2764; &#x2764; &#x2764; &#x2764;</p>
                <h1>YAY! ÄLSKAR DIG POOKIE!!!</h1>
                <p>&#x2764; &#x2764; &#x2764; &#x2764; &#x2764; &#x2764; &#x2764; &#x2764; &#x2764; &#x2764;</p>
            </div>
            <div className="valentine-gifs">
                <img src={snoopy2} alt="" />
                <img src={snoopy3} alt="" />
                <img src={snoopy4} alt="" />
                <img src={snoopy5} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Valentine