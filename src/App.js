import React from "react";
import "./App.css"
import { action ,originals, trending} from "./urls";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={trending} title='Trending'  />
    <RowPost  url={originals} title='Netflix Originals'  isSmall />
    <RowPost url={action} title='Action' isSmall />

   
    </div>
  );
}

export default App;
