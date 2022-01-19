// imports

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './assets/Navbar';
import UserCard from './assets/CompoFuncional/CompoFuncional';
//import ComponenteFuncional from './assets/CompoFuncional/CompoFuncional';
//import Landing from './assets/landing/Landing';


function App() {
  const btnbuy = () => {
    console.log('agregaste a tu carrito');
  }


  return (

    <div className="App">
    
    <Navbar />
    
    <br /><br /><br /><br />
    <section className="item-card">
      <UserCard name='NotMeat' weight={500} due='01/23' price={10} />
      <UserCard name='NotMeat' weight={1500} due='01/23' price={10} />
      <UserCard name='NotMeat' weight={2000} due='01/23' price={15} />
      <UserCard name='NotMeat' weight={2500} due='01/23' price={20} />
      <UserCard name='NotMeat' weight={3000} due='01/23' price={25} />

    </section>
    </div>



    
    

    
    
    
    
  );

}

export default App;
