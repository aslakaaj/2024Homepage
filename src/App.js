import "./App.css";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="services">
        <h2 className="services_header">Services</h2>
        <ul>
          <li><h4>Building for your needs</h4><br /> <p>Building websites for your business´ needs and scale.</p> </li>
          <li><h4>Design in modern fashion</h4><p>Before project start, you´ll join in on the design process, and shaping your future site.</p></li>
          <li><h4>Customer Portal</h4><p>A simpler two-way comminication. Client have full control over the developing process.</p></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
