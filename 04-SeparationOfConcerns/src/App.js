import React from 'react';
import GiphySearch from './GiphySearch';
import SpinLoad from './SpinLoad';

const App = () => (
  <div>
    <h1>Giphy Search</h1>
    <GiphySearch initialQuery="dog" RenderLoading={SpinLoad} />
  </div>
);

export default App;
