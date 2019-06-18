import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  formErrors: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const FormErrors = ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map((fieldName) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <p key={fieldName}>
            {fieldName}
            {formErrors[fieldName]}
          </p>
        );
      }
      return '';
    })}
  </div>
);

FormErrors.propTypes = propTypes;

export default FormErrors;
