import Header from './components/header-component/header-component';
// import Nav from './components/navigation-component/navigation-component';
import Main from './components/main-component/main-component';
import Footer from './components/footer-component/footer-component';
import { BrowserRouter } from 'react-router-dom';

import "./App.css"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
