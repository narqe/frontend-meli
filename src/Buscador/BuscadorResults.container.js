import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BuscadorResults from './BuscadorResults.component';
import BuscadorBox from './BuscadorBox';
import API from '../api/Api';

const BuscadorResultsContainer = ({ match }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchTerm = match.params.term

  useEffect(() => {
    setIsLoading(true)
    const fetchResults = async () => {
      try { 
        const items = await API.getProducts(searchTerm);
        setResults(items);
        setIsLoading(false)
      } catch (error) {
        console.error(error);
        setIsLoading(false)
      }
    };

    fetchResults();
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
      <div>
        <BuscadorBox />
        <BuscadorResults 
          results={results}
          loading={isLoading}
          search={searchTerm}
        />
      </div>
    )
};

BuscadorResultsContainer.propTypes = {
  match: PropTypes.object.isRequired,
};

export default BuscadorResultsContainer;