import React from 'react';
import logo from './logo.svg';
import './App.css';
import { printPDF, optimalPrintPDF } from './printPDF';



function App() {
  return (
    <div className="App">
      <div id="print_pdf_content">
        <header className="App-header">
          <img src='./logo192.png' className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
      <button onClick={printPDF}>print PDF</button>
      <button onClick={optimalPrintPDF}>optimalPrintPDF PDF</button>
    </div>
  );
}

export default App;
