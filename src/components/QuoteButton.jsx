function QuoteButton(props) {
    return (
            <button type="button" onClick={props.onClick}
                    className="text-gray-900 bg-gradient-to-r from-blue-700 to-lime-300 mt-4 hover:cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Новая Цитата
            </button>
    );
}

export default QuoteButton;
