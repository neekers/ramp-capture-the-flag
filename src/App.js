import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [display, setDisplay] = useState([]);
  const [flag, setFlag] = useState("");
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/726566"
      );

      setFlag(await response.text());
    })();
  }, []);

  useEffect(() => {
    if (flag.length > 0) {
      setTimeout(() => {
        const flagSplit = flag.split("");
        const nextLetter = flagSplit.shift();
        setDisplay([...display, nextLetter]);
        setFlag(flagSplit.join(""));
      }, 500);
    }
  }, [flag]);

  return (
    <div className="App">
      {display.length == 0 && <div>Loading...</div>}
      {display.length > 0 && (
        <ol>
          {display.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ol>
      )}

      {/*
      let myUrl = ''
      let letterEls = document.querySelectorAll('section[data-id^="92"] > article[data-class$="45"] div[data-tag*="78"] b.ref')
      letterEls.forEach( y => myUrl += y.getAttribute('value'))
      myUrl.toString()
      */}
    </div>
  );
}
