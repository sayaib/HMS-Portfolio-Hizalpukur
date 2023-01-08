import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IntroSection from './component/IntroSection'
import AboutUs from './component/AboutUs';
import Management from './component/Management';
import GuidingPrinciples from './component/GudingPrinciples';

function App() {
  return (
    <div className="App">
      <IntroSection />
      <AboutUs />
      <Management />
      <GuidingPrinciples />
    </div>
  );
}

export default App;
