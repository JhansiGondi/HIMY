import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './App.router';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
