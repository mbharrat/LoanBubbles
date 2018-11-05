import React from 'react';
import PropTypes from 'prop-types';
import Legend from './Legend';

export default function TypeTitles({ typeCenters }) {
  return (
    <g className="typeTitles">
      {
        
        <text
          x={50}
          y={50}>hihihi<Legend/></text>
      }
    </g>
  )
}

TypeTitles.propTypes = {
  typeCenters: PropTypes.objectOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired).isRequired,
}