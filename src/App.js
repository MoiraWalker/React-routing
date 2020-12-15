import './App.css';
import TopMenu from './components/molecules/topMenu';
import { Routes }  from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider, { AuthContext } from "./hooks/authContext";

function App() {
    return (
        <div className="app">
                <Router>
                    <AuthProvider>
                        <nav>
                            <TopMenu/>
                        </nav>
                        <main>
                            <Routes />
                        </main>
                    </AuthProvider>
                </Router>
        </div>
    );
}

export default App;
