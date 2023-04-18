import { NavLink } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";
import { useState } from "react";

export const Questions = () => {
  const { info } = useDataContext();
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> Questions List </h1>
      <ul>
        {info.map((item) => (
          <>
            <hr />
            <h3>{item.question}</h3>
            <NavLink to={`/questions/${item.id}`}>answer</NavLink>
            <br />
          </>
        ))}
      </ul>
    </>
  );
};
