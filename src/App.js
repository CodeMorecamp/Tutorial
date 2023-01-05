import './App.css';
import Footer from "./components/Footer"
import Main from "./components/Main"
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

function App() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <Main />
      <h1>This is a header</h1>
      <ul>
        <li>One</li>
        <li>One</li>
        <li>Two</li>
        <li>Two</li>
      </ul>
      <Footer />
    </div>
    );
}

export default App;
