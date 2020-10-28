import React, { useState } from 'react';
import './App.css';
import ClassContextComponent from './ClassContextComponent';
import FunctionContextComponent from './FunctionContextComponent';
import { ThemeProvider } from './ThemeContext'; 


export const ThemeContext = React.createContext();



function App() {
  // const [darkTheme, setDarkTheme] = useState(true);

  return (
    <div className="App">
      {/* <ThemeContext.Provider value = {darkTheme}>
        <button onClick={ () => 
          setDarkTheme((prevDarkTheme) => !prevDarkTheme)}
        >
          Toggle Theme
        </button>
      <FunctionContextComponent />
      <ClassContextComponent />
      </ThemeContext.Provider>  */}

      <ThemeProvider>
        {/* <button onClick={ () => 
          setDarkTheme((prevDarkTheme) => !prevDarkTheme)}
        >
          Toggle Theme
        </button> */}
        <FunctionContextComponent />
      {/* <ClassContextComponent /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
