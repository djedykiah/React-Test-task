import React from 'react';

export default function FormErrors({ formErrors }) {
  return (
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
}
