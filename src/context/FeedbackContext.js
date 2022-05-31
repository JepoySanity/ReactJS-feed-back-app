import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  //loader
  const [isLoading, setIsLoading] = useState(true);
  //feedback state
  const [feedback, setFeedback] = useState([]);
  //edit feedback state
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  //run fetch feedback on page load
  useEffect(() => {
    fetchFeedback();
  }, []);

  //function to get data
  const fetchFeedback = async () => {
    const response = await fetch("/feedback?_sort=id&_order=desc");
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };
  //add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };
  //set feedback to edit
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  //update feedback
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };
  //delete feedback
  const deleteFeedback = async (id) => {
    await fetch(`/feedback/${id}`, { method: "DELETE" });
    if (window.confirm("are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        addFeedback,
        editFeedback,
        deleteFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
