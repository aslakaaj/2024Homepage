import "./App.css";
import Header from "./components/Header";
import Services from "./components/Services";
import WorkList from "./components/WorkList";
function App() {
  return (
    <div className="App">
      <Header/>
      <Services/>
      <WorkList/>
    </div>
  );
}

export default App;
