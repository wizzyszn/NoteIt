import { Link } from "react-router-dom";

type Props = {};

function Home({}: Props) {
  return (
    <div>
      <h1>Home</h1>
      <Link to="auth/login">Login</Link>
      <Link to="auth/register">Register</Link>
    </div>
  );
}

export default Home;
