import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <h1>Welcome Abhishek</h1>
      <NavLink to="/questions">Show Questions List</NavLink>
    </>
  );
};
