import React, { useState, useEffect } from 'react';
import { TransactionsTable } from '../../components/TransactionsTable/Index';
import { Menu } from '../../components/Menu';
import { Header } from "../../components/Header/Index";
import {Container} from '../../components/Dashboard/styles';
import { BillsToPay } from '../../components/BillsToPay/Index';

const ContasPagar = (): JSX.Element => {

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
                    <div className="container-dashboard-grafico">
                        <BillsToPay/>    
                        {/* <TransactionsTable/>                 */}
                    </div>
                </div>                
            </Container>   
        </>
    );    

}

export default ContasPagar;