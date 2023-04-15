function App() {
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length)
            setRandomQuote(data[randIndex]);

        }
        fetchData();

    }, [])


    const getNewQuote = () => {
        let randIndex = Math.floor(Math.random() * quotes.length)
        setRandomQuote(quotes[randIndex]);
    }

    return (

        <div
            id="container "
            className="flex flex-col items-center justify-center w-full h-screen mx-auto text-xl text-white bg-zinc-800"
        >
            <div id="wrapper" className="w-[550px] h-[300px] bg-stone-400 rounded">
                <div id="quote-box" className="text-center w-[450] h-auto p-5">
                    <div>
                        <div id="quote-text">
                            {
                                randomQuote ? (
                                    <>
                                        <h5 className="font-extrabold">{randomQuote.author.toUpperCase() || "No author"}</h5>
                                        <p className="text-xl">&quot;{randomQuote.text}&quot;</p>
                                    </>
                                ) : (
                                    <h2>Loading</h2>
                                )
                            }
                        </div>

                        <div id="buttons" className="inline-block space-x-2 end-1.5 mt-[20px]">
                            <button onClick={getNewQuote} className="border-">New Quote</button>
                            <a href="">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-tumblr"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <div id="footer">
                hello
            </div>

        </div >




    )


};




ReactDOM.render(<App />, document.getElementById("app"));


