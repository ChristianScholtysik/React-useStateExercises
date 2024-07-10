import { useState } from "react";
import "./Answer.css";
import AnswerMore from "./AnswerMore";

const Answer = () => {
  const [faqMore, setFaqMore] = useState<boolean>(false);
  return (
    <div>
      <div className="output-answer">
        <p>Because it is!!!</p>
        <button onClick={() => setFaqMore((faqMore) => !faqMore)}>
          {faqMore ? "-" : "+"}
        </button>
      </div>

      {faqMore && (
        <div className="output-answer">
          <AnswerMore />
        </div>
      )}
    </div>
  );
};

export default Answer;
