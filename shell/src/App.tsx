import './App.css';

import CardsMfe from 'cards_mfe/Cards';
import FooterMfe from 'footer_mfe/button';
import NavbarMfe from 'header_mfe/Navbar';

import eventBus from './eventBus';
(window as any).eventBus = eventBus;

const App = () => {
  return (
    <div className="w-full mx-auto p-1 sm:p-4">
      <NavbarMfe />
      <CardsMfe />
      <FooterMfe />
    </div>
  );
};

export default App;
