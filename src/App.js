import Nav from './components/navigation/Nav';
import './App.css';

function App() {
  return (
 <>
 <Nav />
 <div className="Hero">
 <div className="heroText">
  <h1>Welcome to my portfolio</h1>
  <p>Web developer with internship experience, a positive attitude, and plenty of projects to demonstrate skills. Please feel free to reach out to set up a call or just ask any questions you may have!</p>
  <button>Email Me!</button>
  </div>
 <div className="stephimg"></div>
 </div>
 </>
  );
}

export default App;
