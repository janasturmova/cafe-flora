import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Order } from '../components/Order';

const orderedDrinks = async () => {
  const response = await fetch(`http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image`);
  const json = await response.json();
  return json.data;
};

const orderFetch = await orderedDrinks()

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false}/>
      <Order items={orderFetch}/>
    </div>
    <Footer/>
  </div>
);
