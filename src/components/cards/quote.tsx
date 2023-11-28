import { useEffect, useState } from "react";
import quoteImage from "../../assets/breaking obstacles.svg";
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
    <div className="flex flex-col justify-center items-center h-full w-full">
      <img src={quoteImage} alt="" width={120}/>
      <p className="text-center mt-2">{quote}</p>
    </div>
  );
};

export default Quote;
