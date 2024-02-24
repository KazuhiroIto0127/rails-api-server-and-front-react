import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/login">login</Link>
      <br />
      <Link to="/myPage">myPage</Link>
    </div>
  );
}

export default Navigation;
