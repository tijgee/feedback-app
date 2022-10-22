import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedback}) {
if (!feedback)
    return(
        <p>No Feedback</p>
    )
  return (
    <div className="feedback-list">
    {feedback.map( (item) => (
        <FeedbackItem key = {item.id} 
        item = {item}
        />
    ))}
    </div>
  )
}

export default FeedbackList