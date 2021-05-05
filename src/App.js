import "./App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";
import DataList from "./DataList";
import Footer from "./Footer";
import datas from "./data.js";
import Puzzle from "./Puzzle";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Route exact path="/">
          <Hero />
          <div className="list">
            {datas.list.map((li) => (
              <DataList list={li} />
            ))}
          </div>
          <Footer />
        </Route>
        <Route exact path="/Warmup_Puzzles">
          <Puzzle />
        </Route>
      </div>
    </Router>
  );
}

export default App;
