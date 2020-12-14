import './App.css';
import TopMenu from './components/molecules/topMenu';
import { Routes }  from './routes';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

function App() {
    return (
        <div className="app">
            <Router>
                <nav>
                    <TopMenu/>
                </nav>
                <main>
                    <Routes />
                </main>
            </Router>
        </div>
    );
}

export default App;
