import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import Card from "./shared/Card";
import { FeedbackContext } from "../context/FeedbackContext";
function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0)
    return (
      <Card>
        <p>No feedback</p>
      </Card>
    );
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
            >
              <FeedbackItem key={item.id} item={item} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
export default FeedbackList;
