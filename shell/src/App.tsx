import "./App.css";

import NavbarMfe from "header_mfe/Navbar";
import CardsMfe from "cards_mfe/Cards";
import FooterMfe from "footer_mfe/button";

const App = () => {
  return (
    <div className="w-full mx-auto p-1 sm:p-4">
      <NavbarMfe/>
      <CardsMfe />
      <FooterMfe />
    </div>
  );
};

export default App;
