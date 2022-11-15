import "./App.css";
import logoMain from "./images/ironhack-logo-xs.png";
import menuTop from "./images/menu-top-xs.png";
import Icons from "./Components/Icons";

function App() {
  return (
    <>
      <header>
        <nav>
          <img src={logoMain} alt="" />
          <img src={menuTop} alt="" />
        </nav>
        <div className="headerInfo">
          <h2>Say hello to</h2>
          <h2>ReactJS</h2>
          <p>You wil learn how to use</p>
          <p>the most popular frontend library,</p>
          <p>and become a super Ninja developer.</p>
          <button>Awesome!</button>
        </div>
      </header>
      <Icons />
    </>
  );
}

export default App;
