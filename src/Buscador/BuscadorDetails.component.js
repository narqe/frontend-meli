import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import NumberFormat from 'react-number-format';

const BuscadorDetails = ({ product }) => {
  return (
    !!product 
      ? 
      <div className="DetailContainer">
          <div className="Breadcrumb">{product.categories ? product.categories.join(" > ") : ''}</div>
          <div className="Detail">
            <div className="FirstCol">
              <img src={product.picture} alt={product?.item?.title} />
            </div>
            <div className="SecondCol">
              <span className="Condition">{product.condition === 'new' ? "Nuevo" : "Usado"}</span> - 
              <span className="Sold">{product.sold_quantity} vendidos</span>
              <h4 className="Title">{product?.item?.title}</h4>
              <h2><NumberFormat value={product?.item?.price.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h2>
              <Button 
                className="Buy"
                variant="contained"
                color="primary" 
                size="large">
                  Comprar
              </Button>
            </div>
            <div className="Description">
              <h4>Descripcion del producto</h4>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      : 'Cargando...'
  );
};

BuscadorDetails.propTypes = {
  product: PropTypes.object.isRequired,
};

export default BuscadorDetails;
