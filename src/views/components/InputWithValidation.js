import React from 'react';

const InputWithValidation = ({ value, validator, invalidMessage, ...rest }) => {
  const isValueInvalid = !validator(value);

  return (
    <div className='input--container'>
      <input {...{ value }} {...rest} />
      {isValueInvalid && <span className='input__invalid-message'>{invalidMessage}</span>}
    </div>
  );
};

export default InputWithValidation;
