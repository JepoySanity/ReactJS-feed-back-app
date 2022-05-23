import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
import Card from "./shared/Card";
function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0)
    return (
      <Card>
        <p>No feedback</p>
      </Card>
    );
  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return (
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
export default FeedbackList;
