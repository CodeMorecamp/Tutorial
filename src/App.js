import './App.css';
import Footer from "./components/Footer"
import Main from "./components/Main"
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Card from  "./components/Card"
import { Card2, Card3 } from './components/Card';
import Avatar from './components/Avatar';
import StateParent from './components/State/StateParent';



function App() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <Main />
      <Footer />
      <Card header1 = "Header 1 content" />
      <Card2 header2 = "Header 2 Content" />
      <Card3 header3 = "Header 3 Content"/>
      <Avatar 
        size={100}
        person= {{
          name: 'Katsuko Saruhashi',
          imageId: 'Yfe0qp2'
        }}
      />

      <Avatar
        size={80}
        person= {{
          name: 'Aklilu Lemma',
          imageId: 'OKS67lh'
        }}
      />

      <StateParent />
    </div>
    );
}

export default App;
