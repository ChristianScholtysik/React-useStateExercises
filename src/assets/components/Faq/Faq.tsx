import { useState } from "react";
import "./Faq.css";
import Answer from "./Answer";

const Faq = () => {
  const [faq, setFaq] = useState<boolean>(false);
  console.log(faq);
  return (
    <div className="faq-wrapper">
      <div className="faq">
        <p>Why is React great?</p>
        <button onClick={() => setFaq((faq) => !faq)}>{faq ? "-" : "+"}</button>
      </div>

      {faq && (
        <div className="output-answer">
          <Answer />
        </div>
      )}
    </div>
  );
};

export default Faq;
