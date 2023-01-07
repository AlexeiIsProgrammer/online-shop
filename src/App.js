import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ValidationModal from './components/ValidationModal.jsx';
import './styles/App.scss';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <ValidationModal/>
        <Header/>
        <div className='body'>
          <AppRouter/>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
