import { Link } from 'react-router'
import './chatList.css'

const ChatList = () => {
  return (
    <div className='chatList'>
        <span className='title'>Dashboard</span>
        <Link to='/dashboard'>New Chat</Link>
        <Link to='/'>Explore</Link>
        <Link to='/'>Contact</Link>
        <hr/>
        <span className="title">Recent Chats</span>
            <div className="list">
                <Link>My chat title</Link>
                <Link>My chat title</Link>
                <Link>My chat title</Link>
                <Link>My chat title</Link>
                <Link>My chat title</Link>
                <Link>My chat title</Link>
                <Link>My chat title</Link>
                <Link>My chat title</Link>
                <Link>My chat title</Link>
                <Link>My chat title</Link>
                <Link>My chat title</Link>
                <Link>My chat title</Link>
            </div>
            <hr/>
        {/* <div className="upgrade">
            <img src="mindbud-logo-light.png" alt="" />
            <div className="texts">
                <span>Upgrade to Mindbud Pro</span>
                <span>In Production</span>
            </div>
        </div> */}
    </div>
  )
}

export default ChatList