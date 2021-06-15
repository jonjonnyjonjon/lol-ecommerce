import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"


function App() {
    return (
        // <Router>
        //     <Route path="/login">
        //         <Login />
        //     </Route>

        //     <Route path="/register">
        //         <Login />
        //     </Route>

        //     <Route exact path="/">
        //         <Home />
        //     </Route>
        // </Router>

        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;