import './dashboardPage.css'

const DashboardPage = () => {
  return (
    <div className='dashboardPage'>
      <div className="texts">
        <div className="logo">
          <img src="/mindbud-logo-light.png" alt="" />
          <h1>MINDBUD</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.svg" alt="" />
            <span>New Chat</span>
          </div>
          <div className="option">
            <img src="/analysis.svg" alt="" />
            <span>Analyze Images</span>
          </div>
          <div className="option">
            <img src="/empty.svg" alt="" />
            <span>Empty</span>
          </div>

        </div>
      </div>
      <div className="formContainer">
        <form action="">
          <input type="text" placeholder="Ask a question..."/>
          <button>
          <img src="/arrow.png" alt="" />
        </button>
        </form>
      </div>
    </div>
  )
}

export default DashboardPage