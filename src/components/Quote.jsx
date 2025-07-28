import React from 'react';

function Quote({quote, author}) {
    return (
        <div className="flex justify-center items-center bg-slate-300 opacity-70 p-4 flex-wrap rounded-xl">
            <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
                <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path
                        d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <p>{quote}</p>
                <p className="mt-2 text-sm text-gray-500">{author}</p>
            </blockquote>
        </div>
    );
}

export default Quote;
