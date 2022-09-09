import { Container } from "./Styles";
// import { useTransactions } from '../../hooks/useTransactions';
// import { useContext } from 'react'

export function BillsToPay(){

    // const {transactions} = useTransactions();      

    return(
        
        <Container>

            <div className="input-filter">
                <input type="textarea" placeholder="Categoria"/>
                <input type="textarea" placeholder="Contas"/>
                <input type="textarea" placeholder="Data"/>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Descrição da Conta</th>
                        <th>Data de Vencimento</th>
                        <th>Categoria</th>
                        <th>Parcelas</th>
                        <th>Valor Pago</th>
                        <th>Valor a Pagar</th>                        
                    </tr>
                </thead>
                <tbody>                
                    <tr>
                        <td>Compra do Computador</td>
                        <td>12/12/2022</td>
                        <td>Máquinas</td>
                        <td>2 de 10</td>
                        <td>R$ 1.000,00</td>
                        <td>R$ 4.000,00</td>
                    </tr>      
                    <tr>
                        <td>Compra do Computador</td>
                        <td>12/12/2022</td>
                        <td>Máquinas</td>
                        <td>2 de 10</td>
                        <td>R$ 1.000,00</td>
                        <td>R$ 4.000,00</td>
                    </tr>   
                    <tr>
                        <td>Compra do Computador</td>
                        <td>12/12/2022</td>
                        <td>Máquinas</td>
                        <td>2 de 10</td>
                        <td>R$ 1.000,00</td>
                        <td>R$ 4.000,00</td>
                    </tr>                                 
                </tbody>
            </table>
        </Container>
    );
}

{/* <tr key={transaction.id}> */}
{/* <td>
    {new Intl.DateTimeFormat('pt-BR').format(                              
        new Date(transaction.createdAt)
    )}                                      
</td> */}
{/* <td>{transaction.category}</td>                                
<td className="newtransiction">{transaction.title}</td>
<td>{transaction.paymentMethod}</td>
<td>{transaction.bank}</td>
<td className={transaction.type}> */}
    {/* FORMATAÇÃO EM REAIS */}
//     {new Intl.NumberFormat('pt-BR', {
//         style: 'currency',
//         currency: 'BRL'
//     }).format(transaction.amount)}                                    
// </td>                                
// <td>{transaction.historic}</td>   
// <td>{transaction.actions}</td>          

// </tr>  
// )
{/* {transactions.map(transaction =>{

})} */}