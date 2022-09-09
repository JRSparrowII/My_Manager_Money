import React, { useState, useEffect } from 'react';
import { TransactionsTable } from '../../components/TransactionsTable/Index';
import { Menu } from '../../components/Menu';
import { Header } from "../../components/Header/Index";
import {Container} from '../../components/Dashboard/styles';
import { Settings } from '../../components/Settings/Index';

const Configurações = (): JSX.Element => {

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
            <Container>                 
                <Menu />
                <div className="container-dashboard">  
                <Settings/>                
                </div>                
            </Container>   
        </>
    );    

}

export default Configurações;