import './App.css';
import Three from './three';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

function App() {
    return (
        <div style={{position: 'relative'}}>
            <Three/>

            <button style={{position: 'absolute', top: 300, left: 300}}>Oy</button>
        </div>
    );
}

export default App;
