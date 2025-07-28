import React, { useState } from 'react';
import Quote from "./Quote.jsx";
import QuoteButton from "./QuoteButton.jsx";

function QuoteCard() {
    const [quote, setQuote] = useState({
        quote: "Начни делать — и страх исчезнет.",
        author: "Неизвестен",
    });

    const getQuote = async () => {
        try {
            const res = await fetch('https://dummyjson.com/quotes/random');
            const data = await res.json();
            setQuote({
                quote: data.quote,
                author: data.author,
            });
        } catch (error) {
            console.error("Ошибка при получении цитаты", error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-[800px] h-[400px] bg-white opacity-95 rounded-xl shadow-md px-7 flex flex-col items-center justify-center space-y-3">
                <Quote quote={quote.quote} author={quote.author} />
                <QuoteButton onClick={getQuote} />
                <p className="mt-10 text-gray-500 dark:text-gray-400 text-sm text-center">
                    Цитаты берутся с{" "}
                    <a
                        href="https://dummyjson.com/docs/quotes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-500"
                    >dummyjson.com
                    </a>{" "}
                    — спасибо авторам!
                </p>
            </div>
        </div>
    );
}

export default QuoteCard;
