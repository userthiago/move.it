import React, { ChangeEvent, useRef, useState } from 'react';

import { InputContainer } from './styles';

interface InputProps {
  id: string;
  placeholder: string;
  value: string;
  changeValueFunction: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ id, placeholder, value, changeValueFunction }) => {
  return (
    <InputContainer $valueInput={!!value}>
      <input id={id} className="form__input" type="text" onBlur={changeValueFunction} />
      <label htmlFor={id}>{placeholder}</label>
    </InputContainer>
  );
}

export default Input;