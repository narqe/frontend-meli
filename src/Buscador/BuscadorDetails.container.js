import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BuscadorDetails from './BuscadorDetails.component';
import BuscadorBox from './BuscadorBox';
import API from '../api/Api';

const BuscadorDetailsContainer = ({ match }) => {
  const [item, setItem] = useState({});
  const itemId = match.params.id;

  useEffect(() => {
    const fetchResults = async () => {
      try { 
        const details = await API.getDetails(itemId);
        setItem(details)
      } catch (error) {
        console.error(error);
      }
    };

    fetchResults();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <BuscadorBox />
      <BuscadorDetails
        product={item}
      />
    </div>
  );
};

BuscadorDetailsContainer.propTypes = {
  match: PropTypes.object.isRequired,
};

export default BuscadorDetailsContainer;