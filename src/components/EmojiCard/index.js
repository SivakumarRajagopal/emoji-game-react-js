// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachItem, onAddList} = props
  const {id, emojiName, emojiUrl} = eachItem

  const onClickedEmoji = () => {
    onAddList(id)
  }

  return (
    <li className="emoji-container">
      <button type="button" className="emoji-btn" onClick={onClickedEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
