import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Drink } from '../components/Drink';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header/>
    <main>
      <Banner/>
      <Menu/>
      <Gallery/>
      <Contact/>      
    </main>
    <Footer/>
  </div>
);

const rolloutElm = document.querySelector('.rollout-nav')

document.querySelector('.nav-btn').addEventListener('click', () => rolloutElm.classList.toggle('nav-closed'))

rolloutElm.addEventListener('click', () => rolloutElm.classList.toggle('nav-closed'))



