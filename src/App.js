import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  const tweet_URL = "https://x.com/RadioGenoa/status/1784486537041785257";
  const token =
    "AAAAAAAAAAAAAAAAAAAAAAk9tgEAAAAAeeJ408b9ecL1IoAMCWzED5TAXnY%3DwlJkUFefYjera5E1N8jtSR0feluIPikOgODVJgvQzKQIIgjoWv";

  const tweetId = tweet_URL.split("/").pop();

  const fetch_tweets = async () => {
    try {
      const res = await fetch(
        `https://api.twitter.com/2/tweets/${tweetId}?tweet.fields=author_id,created_at,public_metrics`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(await res.json());
    } catch (error) {
      console.error("Error fetch the tweet: ", error);
    }
  };

  fetch_tweets();

  return (
    <div className="App">
      <header className="App-header">
        <h2>Krishna starts here again...</h2>
      </header>
    </div>
  );
}

export default App;
