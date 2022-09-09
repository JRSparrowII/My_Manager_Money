import { Switch, Route } from 'react-router-dom';
import  Home  from './pages/Home';
import  Lancamentos  from './pages/Lancamentos'
import ContasPagar from './pages/ContasPagar';
import Configuracoes from './pages/Configuracoes';

const Routes = (): JSX.Element => {
  return (    
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/lancamentos" component={Lancamentos} />    
      <Route path="/ContasPagar" component={ContasPagar} />  
      <Route path="/Configuracoes" component={Configuracoes} />  
    </Switch>
  );
};

export default Routes;
