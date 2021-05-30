import { Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import NumberFormat from 'react-number-format';

const BuscadorResults = ({ results, loading, search }) => {

  return (
      <div className="ResultsContainer">
      <h2>Resultados para: {search}</h2>
      {!!loading
        ? 'Cargando...'
        : <ul className="Results">
            {!!results.items ? 
              results.items.map((item , i) => (
              <a href={`/items/${item.id}`} key={i}>
                <li className="Item" >
                    <div className="LeftBox">
                      <img src={item.picture} alt={item.title} />
                    </div>
                    <div className="RightBox">
                      <div className="FirstCol">
                        <h2>
                          <NumberFormat value={item.price.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                        </h2>
                        <p className="Title">{item.title}</p>
                      </div>
                      <div className="SecondCol">
                        <p className="Place">{item.address}</p>
                      </div>
                    </div>
                </li>
                <Divider/>
              </a>)
              )
            : 'No hay resultados para la búsqueda que realizaste' 
          }
          {!!results.items && !results.items.length && ('No hay resultados para la búsqueda que realizaste')}
        </ul>
      }
      </div>
  );
};

BuscadorResults.propTypes = {
  results: PropTypes.object,
};

export default BuscadorResults;
