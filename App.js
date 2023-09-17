// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Stacks from "../doit/src/routes/Stacks"

function App() {
  return (
    <NavigationContainer>
      <Stacks></Stacks>
    </NavigationContainer>
  );
}

export default App;