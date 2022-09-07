import { Switch, Route } from 'react-router-dom';

import  Home  from './pages/Home';
import  Lancamentos  from './pages/Lancamentos'

const Routes = (): JSX.Element => {
  return (    
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/lancamentos" component={Lancamentos} />      
    </Switch>
  );
};

export default Routes;
