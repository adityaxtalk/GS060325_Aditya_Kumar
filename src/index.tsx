import React from 'react';
import ReactDom from 'react-dom/client'
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import App from "./App";
import store from "./store/store";


const root=ReactDom.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)
