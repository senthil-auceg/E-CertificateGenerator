import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import Certificate from "./routes/Certificate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>


        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/certificate/:id" element={<Certificate />} />
        </Routes>

        
      </BrowserRouter>
    </div>
  );
}

export default App;
/* 
This is the main component for your React application. Let's go through it:

BrowserRouter: This component is part of the react-router-dom library and provides the navigation context for your app.

Routes and Route: These components define the routes for your application. In this case, there are three routes:

The default route (/) leads to the SignIn component.
The /home route leads to the Home component.
The /certificate/:id route is a dynamic route, where :id is a parameter that can be accessed in the Certificate component.
Components: SignIn, Home, and Certificate are components that you've imported and rendered based on the route. */