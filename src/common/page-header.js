import { Link } from "react-router-dom";
import "./page-header.css";

function PageHeader() {
  return (
    <header className="page-header">
      <span className="page-header__logo">Trivia Game</span>
      <nav className="page-header__nav">
{/* <Link to="/quiz">Quiz</Link>  */}

      </nav>
    </header>
  );
}

export default PageHeader;
