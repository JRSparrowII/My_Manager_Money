import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";
import { useTransactions } from '../../hooks/useTransactions';

// import React,{ useContext } from 'react';
// import { TransactionsContext } from '../../TransactionsContext';

export function Summary(){

    const {transactions} = useTransactions();
  
    // SOMANDO O TOTAL DAS ENTRADAS E SAIDAS EM TELA
    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else{
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    },{
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return(
        <Container>
            <div className='receitas'>
                <header>
                    <p>Receitas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}                      
                </strong>
            </div>
            <div className='despesas'>
                <header>
                    <p>Despesas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>
                    -
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}                       
                </strong>
            </div>
            <div className='saldo'>
                <header>
                    <p>Saldo</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>
                    -
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}                       
                </strong>
            </div>
            <div className='totalGeral'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}                     
                </strong>
            </div>
            
        </Container>
    );
}