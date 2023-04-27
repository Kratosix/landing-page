
import Navbar from "./Components/NavBar";
import Banner from "./Components/Banner";
import Provision from "./Components/Provision";
import Copyright from "./Components/Copyright";
import "./App.css"

export default function App(){
    return(
        <main className="Container">
            <Navbar/>
            <Banner/>
            <Provision/>
            <Copyright/>
        </main>
    )
}