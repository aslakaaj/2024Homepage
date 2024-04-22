import name_logo from "../img/name_logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <img src={name_logo} alt="Aslak Jønsson" />
      <p>
        I´m a Front-End developer, focusing on both Interactive and Dynamic
        Design. Working mainly with local businesses. I design and develop
        websites that fits your brand. Currently I´m based in Volda, Norway.
      </p>
    </div>
  );
};

export default Header;
