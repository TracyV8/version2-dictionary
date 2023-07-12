import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition">
        {" "}
        <strong>Definition: </strong>
        <p className="meaning">{props.meaning.definition}</p>
      </div>
      <div className="example">
        <em>{props.meaning.example}</em>

        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
