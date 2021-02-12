import React from 'react';
import Titulo from './Titulo';
import Sinopse from './Sinopse';
import Abertura from './Abertura';

function App() {
      return (
            <div>
            <Titulo titulo="One Tree Hill" />
            <Sinopse/>
            <Abertura musica="One Tree Hill Theme song"/>
            </div>
    );
}
export default App;