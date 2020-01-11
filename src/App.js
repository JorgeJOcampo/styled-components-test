import React from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './components/Text'
import ButtonPropBased from './components/ButtonPropBased';
import ButtonExtendingBased from './components/ButtonExtendingBased';
import PropsWithDefault from './components/PropsWithDefault';
import Animations from './components/Animations';

function App() {
  return (
    <div className="App">
      <Text text="Te amo ♥"/>
      <ButtonPropBased/>
      <ButtonExtendingBased/>
      <PropsWithDefault/>
      <Animations/>
    </div>
  );
}

export default App;
