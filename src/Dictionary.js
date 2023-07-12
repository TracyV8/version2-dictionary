import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    // console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "f5f0a9eb4490812b8cb30o193ft06985";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h3>What word would you like to search?</h3>
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
