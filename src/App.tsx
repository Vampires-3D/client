import './App.css';
import Three from './three';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import {Layout} from './layout';
import {Menu} from './components/Menu.tsx';

function App() {
  return (
    <div style={{position: 'relative'}}>
      <Three/>
      <Layout>
        <Menu/>
      </Layout>
      {/*<button style={{position: 'absolute', top: 300, left: 300}}>Oy</button>*/}
    </div>
  );
}

export default App;
