import './index.css'

const ThumbNails = props => {
  const {thumbnailUrls, checkTabId, isActive} = props
  const {thumbnailUrl, imageAltText, id} = thumbnailUrls
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickThumbNail = () => {
    checkTabId(id)
  }
  return (
    <div>
      <li className="listItems">
        <button className="btn" onClick={onClickThumbNail} type="button">
          <img
            src={thumbnailUrl}
            alt={imageAltText}
            className={thumbnailClassName}
          />
        </button>
      </li>
    </div>
  )
}
export default ThumbNails
