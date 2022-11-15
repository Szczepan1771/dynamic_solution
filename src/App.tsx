import Router from "./components/organisms/Router";
import { BrowserRouter } from 'react-router-dom'
import Footer from "./components/organisms/Footer";
import Menu from "./components/organisms/Header";

function App() {
    return (
        <BrowserRouter>
            <Menu/>
            <Router/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
