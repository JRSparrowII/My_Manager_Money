import { useState } from 'react';
import receitaImg from '../../assets/receita.png'
import relatoriosImg from '../../assets/relatorios.png'
import contaspgImg from '../../assets/contaspg.png'
import contasreceberImg from '../../assets/contasreceber.png'
import lancamentoImg from '../../assets/lancamento.png'
import cardcreditImg from '../../assets/cardcredit.png'
import { Container, Content } from './styles'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

interface MenuProps{
    onOpenNewTransactionModal: () => void;
}



// export function Menu({onOpenNewTransactionModal}: MenuProps){    
export function Menu(){    

    function onOpenNewTransactionModal(){

    }
    
    return(
        <Container>
            {/* <Content> */}
                <div>        
                    <aside className="menu-container">
                        <div className="menu-header">                            
                            <p> Henrique</p>
                        </div>
                        <nav className="menu-content">
                            <button 
                                className="menu-button" 
                                type="button"
                                onClick={onOpenNewTransactionModal}>
                                <img src={receitaImg} alt="receita" />                                
                                <span>Nova Transação</span> 
                            </button>

                            <button className="menu-button" type="button">  
                                <img src={lancamentoImg} alt="lancamentos" />                                      
                                <Link to="/">
                                    Home
                                </Link>
                            </button>  

                            <button className="menu-button" type="button">  
                                <img src={lancamentoImg} alt="lancamentos" />                                      
                                <Link to="/lancamentos">
                                    Lançamentos
                                </Link>
                            </button>                                            
                            
                            <button className="menu-button" type="button">
                                <img src={cardcreditImg} alt="cartao_credito" />                               
                                <span>Cartão de Crédito</span> 
                            </button>

                            <button className="menu-button" type="button">
                                <img src={contasreceberImg} alt="receita" />                             
                                <Link to="/ContasPagar">
                                    Contas a Receber
                                </Link>                    
                            </button>

                            <button className="menu-button" type="button">
                                <img src={contaspgImg} alt="receita" />                     
                                <span>Contas a Pagar</span> 
                            </button>

                            <button className="menu-button" type="button">
                                <img src={relatoriosImg} alt="receita" />                                
                                <span>Outros Relatórios</span> 
                            </button> 

                            <button className="menu-button" type="button">
                                <img src={relatoriosImg} alt="receita" /> 
                                <Link to="/configuracoes">
                                    Configurações
                                </Link>                          
                            </button> 

                        </nav>
                    </aside>
                </div>
            {/* </Content> */}
        </Container>
    );
}
