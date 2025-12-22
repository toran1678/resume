import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import './styles/global.css';
import './App.css';

function App() {
  return (
    <div className="app" id="top">
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
