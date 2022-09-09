import styled from 'styled-components'
import { Dashboard } from '../../components/Dashboard/index';
import { Header } from '../../components/Header/Index';
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from '../../components/NewTransactionModal';
import {TransactionsProvider} from '../../hooks/useTransactions';



const Home = (): JSX.Element => {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />      
    </>
  );
}

export default Home;
