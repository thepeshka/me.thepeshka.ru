import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  display: block;
  position: absolute;
  opacity: 0;
  z-index: 10000;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  padding: 0;
  margin: 0;
  border: 0;
`;


export const UserInput = ({onTextChange: onTextChange_, onSubmit: onSubmit_, value, allowed}) => {
  const [text, setText] = useState("");
  const inputRef = useRef();

  const onTextChange = (text) => {
    setText(text);
    onTextChange_(text);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText('');
    onSubmit_();
  };

  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    document.addEventListener("click", focus);
  }, []);

  useEffect(() => {
    focus();
  }, [allowed]);

  useEffect(() => {
    if (!allowed) setText(value);
  }, [value, allowed])

  return <form onSubmit={onSubmit}>
    <InputStyled ref={inputRef} onChange={e => onTextChange(e.target.value)} value={text} disabled={!allowed}/>
  </form>;
};
