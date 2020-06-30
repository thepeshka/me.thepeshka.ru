import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const CursorStyled = styled.div`
  display: inline-block;
  position: relative;
  ::after {
    content: "█";
    position: absolute;
    display: ${p => p.visible ? "inline" : "none"};
    top: -1em;
  }
`;


export const Cursor = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let visible = true;
    let interval = setInterval(() => {
      visible = !visible;
      setVisible(visible)
    }, 1000);
    return () => {clearInterval(interval)};
  }, []);

  return <CursorStyled visible={visible} />;
};
