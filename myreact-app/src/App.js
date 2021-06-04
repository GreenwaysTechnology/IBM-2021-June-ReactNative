//import { Heading } from './header/header.component'
//import { Main } from './main/main.component';
//import { Footer } from './footer/footer.component'
import { Main } from './main'
import { Footer } from './footer'
//import { MenuBar } from './header/menubar.component';
//using barrel export 
import { Heading, MenuBar } from './header' // ./folder
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <MenuBar></MenuBar>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
