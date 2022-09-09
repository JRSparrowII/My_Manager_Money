import styled from 'styled-components'
import { Dashboard } from './components/Dashboard/index';
import { Header } from './components/Header/Index';
// import { Menu } from './components/Menu/index';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import {TransactionsProvider} from './hooks/useTransactions';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

// Modal.setAppElement('#root');

export function App() {
  return (
    <BrowserRouter>
      <TransactionsProvider>
        <Routes/>
        <GlobalStyle/>
      </TransactionsProvider>
    </BrowserRouter>
  );
}

// export default App;
