import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './hooks/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  
)
/* 
Here's an explanation:

ReactDOM.createRoot: This is a feature of React that enables concurrent mode. It's rendering the app into an element with the ID of 'root'.

React.StrictMode: This is a wrapper component that checks for potential problems in your application during development. It helps identify common mistakes.

Provider: This component is from the react-redux library and is used to provide the Redux store to your components.

store: This is presumably a Redux store that holds the state of your application.

<App />: This is where your App component is being rendered.

./index.css: This is likely a stylesheet for styling your application. */