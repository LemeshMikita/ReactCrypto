import React from 'react';
import { AppLayout } from './components/layout/AppLauout';
import { CryptoContextProvider } from './context/crypto-context';

function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
}

export default App;
