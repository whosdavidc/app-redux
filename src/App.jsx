import React from 'react';
import Pokemones from './components/Pokemones';

import {Provider} from "react-redux"
import generateStore from "./redux/store"

function App() {

  const store = generateStore() 


  return (
    <Provider store={store}>
      <div className="container mt-4">
        <Pokemones/>
      </div>
    </Provider>
  );
}

export default App;
