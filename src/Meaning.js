import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        {" "}
        <strong>Definition: </strong>
        {props.meaning.definition}
      </div>
      <div>
        <em>{props.meaning.example}</em>

        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
