import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeeback] = useState(FeedbackData);
  return (
    <>
      <Header text={"Feedback UI"} bgColor="red" textcolor="blue" />
      <div className="Container">
        <FeedbackList feedback = {feedback}/>
      </div>
    </>
  );
}

export default App;
