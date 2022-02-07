import "./Header.css";
import { GiNotebook } from "react-icons/gi";

const Header = () => {
  return (
    <header>
      <GiNotebook className="logo" />
      <h1>Yapılacak İşler <span>App</span></h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Yapılacak İşler App",
};

export default Header;
