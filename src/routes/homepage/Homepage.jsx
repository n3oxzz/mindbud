import { Link } from 'react-router'
import './homepage.css'
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'

const Homepage = () => {

  const [typingStatus, setTypingStatus] = useState("human1")

  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="" className='orbital' />
      <div className="left">
        <h1>MINDBUD</h1>
        <h2>Clarity over chaos, stay focused.</h2>
        <h3>One hub to plan, learn, and act. <br/>From idea to shipped results.</h3>
        <Link to='/dashboard'>Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className='bot'/>
          <div className="chat">
            <img src={typingStatus === "human1" ? "/human1.jpeg" : typingStatus === "bot" ? "/bot.png" : "/human2.jpeg"} alt="" />
            <TypeAnimation
              className="type-line"
              sequence={[
                'User: What are top 3 banks in Canada?',
                2000, ()=>{
                  setTypingStatus("bot");
                },
                "Bot: Let's break it down for you...",
                2000,()=>{
                  setTypingStatus("human2");
                },
                'User: Where do I find a job in Canada?',
                2000,()=>{
                  setTypingStatus("bot");
                },
                'Bot: I can show you crucial websites for seeking jobs...',
                2000,()=>{
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        {/* <img src="/mindbud-logo-light.png" alt="" /> */}
        <div className="links">
          <Link to='/'>Terms of Service</Link>
          <span>|</span>
          <Link to='/'>Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage