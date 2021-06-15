import { BrowserRouter as Router, Route } from "react-router-dom" 
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"

function App() {
    return (
        <Router>
            <Route path="/" exact>
                <Home />
            </Route>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
                integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
                crossorigin="anonymous"
            />
        </Router>
    );
}

export default App;