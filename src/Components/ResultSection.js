import React from 'react';
import ListItems from './ListItems.js';
import DetailItem from './DetailItem.js';

function ResultSection (props) {
  return (
      <div className="ResultSection container">
        <div className="col-sm-4"><ListItems/></div>
        <div className="col-sm-8"><DetailItem/></div>
      </div>
    );
}

export default ResultSection;
