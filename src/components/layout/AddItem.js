import React from 'react';
import PropTypes from 'prop-types';

export const AddItem = ({product, name, price, onChange, onSubmit}) => (
    <div className="row justify-content-center">
      <form className="form-inline" onSubmit={onSubmit}>
        <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="Where?"
            value={product}
            name="product"
            onChange={onChange}
        />

        <div className="input-group mb-2 mr-sm-2">
          <input
              type="text"
              className="form-control"
              placeholder="Who?"
              value={name}
              name="name"
              onChange={onChange}
          />
        </div>

        <div className="input-group mb-2 mr-sm-2">
          <input
              type="text"
              className="form-control"
              placeholder="€€€"
              value={price}
              name="price"
              onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2 pxy-4"><i className="fas fa-plus-square"></i></button>
      </form>
    </div>
);

AddItem.propTypes = {
  product: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};