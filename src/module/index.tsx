import React from 'react';
// here import library component to render them
import Flex from '../lib/Flex';
import { JustifyContent, Direction } from '../lib/Flex/types';

const App = () => (
  <Flex
    direction={Direction.COLUMN_REVERSE}
    justifyContent={JustifyContent.END} 
    className={'here-we-are'}
    style={{ background: 'red', height: '50vh' }}>
      <h1>React Flex Block</h1>
    <div style={{ background: 'pink', height: 50, width: 100 }}>Box 1</div>
    <div style={{ background: 'maroon', height: 50, width: 100 }} >Box 2</div>
  </Flex>);

export default App;