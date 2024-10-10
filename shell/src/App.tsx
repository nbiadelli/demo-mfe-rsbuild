import './App.css';

import HeaderMfe from 'header_mfe/button';
import CardsMfe from 'cards_mfe/button';
import FooterMfe from 'footer_mfe/button';

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <hr/>
      <HeaderMfe/>
      <hr/>
      <CardsMfe/>
      <hr/>
      <FooterMfe/>
    </div>
  );
};

export default App;
