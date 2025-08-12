import React, { useState } from 'react';

// We'll store our quotes in an array of objects.
// This makes it easy to add more quotes later!
const quotes = [
  { text: "The universe is under no obligation to make sense to you.", author: "Neil deGrasse Tyson" },
  { text: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan" },
  { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { text: "To confine our attention to terrestrial matters would be to limit the human spirit.", author: "Stephen Hawking" },
  { text: "Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.", author: "Stephen Hawking" },
  { text: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
  { text: "That's one small step for a man, one giant leap for mankind.", author: "Neil Armstrong" },
  { text: "We are all in the gutter, but some of us are looking at the stars.", author: "Oscar Wilde" }
];


export default function App() {
  // The 'useState' hook now starts with the first quote from our list.
  const [quote, setQuote] = useState(quotes[0]);

  // This is the function that will run when the button is clicked.
  const handleNewQuoteClick = () => {
    // 1. Generate a random number between 0 and the last index of the quotes array.
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // 2. Get the quote at that random index.
    const newQuote = quotes[randomIndex];
    
    // 3. Use 'setQuote' to update the state. React will automatically re-render
    //    the component to display the new quote.
    setQuote(newQuote);
  };

  return (
    <div id="app-container">
      <div className="stars-bg"></div>
      <div className="overlay"></div>
      <main id="main-content">
        <h1 id="app-title">
          Cosmic Quote Generator
        </h1>
        <p id="app-description">
          Discover wisdom from the cosmos. Click the button below for a new quote.
        </p>
        <div id="quote-box">
          <blockquote id="quote-text">
            "{quote.text}"
          </blockquote>
          <cite id="quote-author">
            - {quote.author}
          </cite>
        </div>
        
        {/*
          ACTION: We've added the 'onClick' attribute here.
          Now, when this button is clicked, it will call our 'handleNewQuoteClick' function.
        */}
        <button id="new-quote-btn" onClick={handleNewQuoteClick}>
          Get New Quote
        </button>
      </main>

      {/* The CSS styles remain the same */}
      <style>{`
        :root {
          --primary-bg: #0c0a14;
          --text-color: #f0f0f0;
          --glow-color: rgba(192, 132, 252, 0.6);
          --button-bg: #8a2be2;
          --button-hover-bg: #9932cc;
        }
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          background-color: var(--primary-bg);
        }
        #app-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          color: var(--text-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          overflow: hidden;
          box-sizing: border-box;
        }
        .stars-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          background-image: url('https://www.transparenttextures.com/patterns/stardust.png');
          animation: move-twinkling-stars 200s linear infinite;
        }
        @keyframes move-twinkling-stars {
          from { background-position: 0 0; }
          to { background-position: -10000px 5000px; }
        }
        .overlay {
          position: absolute;
          inset: 0;
          background-color: black;
          opacity: 0.4;
          z-index: 1;
        }
        #main-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 650px;
        }
        #app-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: bold;
          margin-bottom: 1rem;
          text-shadow: 0 0 8px var(--glow-color), 0 0 20px var(--glow-color);
        }
        #app-description {
          font-size: 1.125rem;
          color: #d1d5db;
          margin-bottom: 2rem;
        }
        #quote-box {
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        #quote-text {
          font-size: 1.5rem;
          font-style: italic;
        }
        #quote-author {
          display: block;
          text-align: right;
          margin-top: 1rem;
          color: #d1d5db;
          font-style: normal;
        }
        #new-quote-btn {
          margin-top: 2rem;
          background-color: var(--button-bg);
          color: white;
          font-weight: bold;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.25);
          transition: all 0.2s ease-in-out;
        }
        #new-quote-btn:hover {
          background-color: var(--button-hover-bg);
          transform: scale(1.05);
        }
        #new-quote-btn:focus {
          outline: 2px solid var(--glow-color);
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}
