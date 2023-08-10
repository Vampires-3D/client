import './App.css';
import Three from './three';
import {Layout} from './layout';
import {Menu} from './components/Menu.tsx';

function App() {
  return (
    <div className="position-relative">
      <Three/>
      <Layout>
        <Menu/>
      </Layout>
    </div>
  );
}

export default App;
