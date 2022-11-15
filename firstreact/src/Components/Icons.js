import icon1 from ".././images/icon1.png";
import icon2 from ".././images/icon2.png";
import icon3 from ".././images/icon3.png";
import icon4 from ".././images/icon4.png";

function Icons() {
  return (
    <div className="Icons">
      <div className="icon1">
        <img src={icon1} alt="" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="icon2">
        <img src={icon2} alt="" />
        <h3>Componenets</h3>
        <p>Build encapsulated componenets that manage their state.</p>
      </div>
      <div className="icon3">
        <img src={icon3} alt="" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div className="icon4">
        <img src={icon4} alt="" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

export default Icons;
