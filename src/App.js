import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import WorkList from "./components/Work/WorkList";
function App() {
  return (
    <div className="App">
      <Header/>
      <Services/>
      <WorkList/>
      <Footer/>
    </div>
  );
}

export default App;
