import React from 'react';
// import { createBrowserHistory } from "history";
import { Route, BrowserRouter} from "react-router-dom";
import Homepage from "views/Homepage"
// import AdminLayout from "layouts/Admin/Admin.js";
// import RTLLayout from "layouts/RTL/RTL.js";

// import "assets/scss/black-dashboard-react.scss";
// import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

// const hist = createBrowserHistory();

class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Route path="/" exact component={Homepage} />
                </BrowserRouter>
            </div>
        )
    }
}

export default App;