import React from "react";
import "./App.css";
import Initial from "./components/initial";
import Confirm from "./components/confirm";
import Result from "./components/result";

const App = () => {
  
  const handleComponent = () => {
    const screen = 0;
    if(screen === 0) return <Initial/>
    if(screen === 1 ) return <Confirm/>
    if(screen === 2 ) return <Result/>
  }
  return (
    <div className="container">
{handleComponent()}

      <footer className="site-footer">
       
        <div className="footer-bottom">
          <p>Coded © 2024 by Tasha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
