import React from 'react';
import styled from 'styled-components'

// The Button from the last section without the interpolations
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />
export default () =>(
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
    <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
  </div>
);
