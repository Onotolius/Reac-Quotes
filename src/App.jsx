import './App.css'
import React from 'react';
import QuoteCard from "./components/QuoteCard.jsx";

function App() {
    return (
        <div className="min-h-screen bg-[url('/main.jpg')] bg-cover bg-center">
            <QuoteCard/>
        </div>
    );
}

export default App;
