import React from "react";
import PropTypes from "prop-types";

import App from "../app";
import { toTitleCase } from "../utils";

const Set = ({ index, selectedSet, type, isDecadent }) => {
  const onSetChange = (e) => {
    if (!isDecadent) {
      App.state[type][index] = e.currentTarget.value;
    } else {
      let sets = App.state[type];
      for (let i = 0; i < sets.length; i++) {
        sets[i] = e.currentTarget.value;
      }
    }
    
    App.save(type, App.state[type]);
  };
  let groups = [];
  for (let setType in App.state.availableSets) {
    const allSets = App.state.availableSets[setType];
    let options = [];
    allSets.forEach(({ code, name }) => {
      options.push(
        <option value={code} key={code}>{name}</option>
      );
    });
    groups.push(
      <optgroup label={toTitleCase(setType, "_")} key={setType}>{options}</optgroup>
    );
  }
  return (
    <select value={selectedSet} onChange={onSetChange} key={index}>
      {groups}
    </select>
  );
};

Set.propTypes = {
  index: PropTypes.number,
  selectedSet: PropTypes.string,
  type: PropTypes.string
};

export default Set;
