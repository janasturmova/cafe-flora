import { Drink } from './Drink';
import './Menu.css';


export const Menu = ({drinks}) => (
    <section className="menu" id='menu'>
        <div className="container">
          <h2>Naše nabídka</h2>
          <p className="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
          </p>

          <div className="drinks-list">
            {drinks.map((item) => (
              <Drink
                key={item.id}
                id={item.id}
                name={item.name}
                ordered={item.ordered}
                image={`http://localhost:4000${item.image}`}
                layers={item.layers}
              />
            ))}
          </div>

          <div className="order-detail">
            <a href="/order.html">Detail objednávky</a>
          </div>
        </div>
      </section>
)

