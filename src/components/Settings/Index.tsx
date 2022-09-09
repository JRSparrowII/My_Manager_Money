import { Container } from "./Styles";

export function Settings(){

    // const {transactions} = useTransactions();      

    return(
        
        <Container>
            <div className="button">
                <button type="submit">Receitas</button>
                <button type="submit">Despesas</button>
                {/* <button type="submit">Bancos</button>
                <button type="submit">Formas de Pagamento</button> */}
            </div>            
        </Container>
    );
}