import Counter from "../../assets/components/Counter/Counter";
import DayNight from "../../assets/components/Day_Night/DayNight";
import Faq from "../../assets/components/Faq/Faq";
import Form from "../../assets/components/Form";
import "./Home.css";

const Home = () => {
  return (
    <>
      <h2>React-Input-Level-1_6</h2>
      <Form />
      <hr />
      <h2>React-Counter-Level-1_3</h2>
      <Counter />
      <hr />
      <h2>React-state-faq-Level-1_1 / React-state-faq-2-Level-1_2</h2>
      <Faq />
      <hr />
      <h2>React-state-Day-Night-change-Level-2_2</h2>
      <DayNight />
      <hr />
    </>
  );
};

export default Home;
