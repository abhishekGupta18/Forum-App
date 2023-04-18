import { useParams } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";

export const Answers = () => {
  const { info } = useDataContext();
  const { answerId } = useParams();

  const findAns = info.find((item) => item.id === Number(answerId));
  return (
    <>
      <h3>Que- {findAns.question}</h3>
      <p>
        {" "}
        <strong>Ans - </strong>
        {findAns.answer}
      </p>
    </>
  );
};
