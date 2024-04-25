import './index.css'

const HistoryItem = props => {
  // console.log(props)
  const {historyDetails, deleteHistory} = props
  const {domainUrl, id, logoUrl, timeAccessed, title} = historyDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-list-item">
      <div className="history-details-container">
        <p className="time-accessed">{timeAccessed}</p>
        <div className="logo-title-container">
          <img className="logo" src={logoUrl} alt="domain logo" />
          <div className="title-url-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        className="button"
        type="button"
        data-testid="delete"
        onClick={onDeleteHistory}
      >
        <img
          className="delete-icon"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}
export default HistoryItem
