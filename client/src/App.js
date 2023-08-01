import './App.css';
import { Signup, Signin } from './components/index.ts';

function App({ hasAccount }) {

  console.log("=== yuppp ===", hasAccount)
  return (
    <div className="App">
      {hasAccount && <Signin />}
      {!hasAccount && <Signup />}
    </div>
  );
}

export default App;
