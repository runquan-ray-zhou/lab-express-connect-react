import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
  return (
    <nav>
        <Link to="/">
        <button>Home</button>
        </Link>
        <Link to="/logs">
        <button>Captain's Log</button>
        </Link>
        <Link to="/logs/new">
        <button>New Log</button>
        </Link>
    </nav>
  );
}