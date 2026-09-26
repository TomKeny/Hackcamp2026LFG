import logo from './logo.svg';
import './App.css';
import Appheader from './components/appheader'
import Main from './components/main'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Appheader/>
        <Main/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
