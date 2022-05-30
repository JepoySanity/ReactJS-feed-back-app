import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";
import PropTypes from "prop-types";
import Card from "./shared/Card";
function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      {/* delete feedback */}
      <button
        onClick={() => {
          deleteFeedback(item.id);
        }}
        className="close"
      >
        <FaTimes color="#2f2f2f" />
      </button>
      {/* edit feedback */}
      <button
        onClick={() => {
          editFeedback(item);
        }}
        className="edit"
      >
        <FaEdit color="#2f2f2f" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;
