import { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState();
  const api_url = "https://type.fit/api/quotes";

  useEffect(() => {
    async function fetchQuote(url: RequestInfo | URL) {
      const response = await fetch(url);
      const data = await response.json();
      const index = Math.floor(Math.random() * data.length);
      const quoteText = data[index];
      return quoteText.text;
    }
    fetchQuote(api_url).then((quote) => {
      setQuote(quote);
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-full w-full">
      <p className="text-center">{quote}</p>
    </div>
  );
};

export default Quote;
