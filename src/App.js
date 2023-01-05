import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ValidationModal from './components/ValidationModal.jsx';
import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <ValidationModal/>
      <Header/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
