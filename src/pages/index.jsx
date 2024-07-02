import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const fetchDrinks = async () => {
  const response = await fetch(`http://localhost:4000/api/drinks`);
  const json = await response.json();
  return json.data;
};

const drinksFetch = await fetchDrinks()

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true}/>
    <main>
      <Banner/>
      <Menu drinks={drinksFetch}/>
      <Gallery/>
      <Contact/>      
    </main>
    <Footer/>
  </div>
);

const rolloutElm = document.querySelector('.rollout-nav')

document.querySelector('.nav-btn').addEventListener('click', () => rolloutElm.classList.toggle('nav-closed'))

rolloutElm.addEventListener('click', () => rolloutElm.classList.toggle('nav-closed'))




// document.querySelectorAll('.drink__controls').forEach((form) => {
//   form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const id = form.dataset.id

//     await fetch(`http://localhost:4000/api/drinks/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify([ 
//           { op: 'replace', path: '/ordered', value: true }
//         ])
//       })   
//       window.location.reload();
//   })
// })


  document.querySelectorAll('.drink__controls').forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const id = form.dataset.id;
      const button = form.querySelector(".order-btn")
      const isOrdered = button.classList.contains("order-btn--ordered")
  
      const newOrderStatus = !isOrdered
  
      await fetch(`http://localhost:4000/api/drinks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([
          { op: 'replace', path: '/ordered', value: newOrderStatus }
        ])
      })
      
      button.textContent = newOrderStatus ? 'Zrušit' : 'Objednat';
      button.classList.toggle('order-btn--ordered', newOrderStatus);
    })
  })