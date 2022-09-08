import React, { useState, useEffect } from 'react';
import { TransactionsTable } from '../../components/TransactionsTable/Index';
import { Menu } from '../../components/Menu';
import { Header } from "../../components/Header/Index";
import { GlobalStyle } from '../../styles/global';
import {Container} from '../../components/Dashboard/styles';

const Lancamentos = (): JSX.Element => {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }

    return (        
        
        <Container> 
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
            <Menu />
            <div className="container-dashboard">                
                <div className="container-dashboard-grafico">
                    <TransactionsTable/>                    
                </div>
            </div>              
            <GlobalStyle/>
        </Container>   
        
    );    

}

export default Lancamentos;






