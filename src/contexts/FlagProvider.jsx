import React, { useState } from 'react';
import FlagContext from './FlagContext'; // Asegúrate de importar el Context que has creado

const FlagProvider = ({ children }) => {
  const [flag, setFlag] = useState(false); // Inicializa el estado del flag

  return (
    <FlagContext.Provider value={{ flag, setFlag }}>
      {children}
    </FlagContext.Provider>
  );
};

export default FlagProvider;
