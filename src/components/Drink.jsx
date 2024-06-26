import './Drink.css';
import { Layer } from './Layer';



export const Drink = ({id, name, ordered, image,layers}) => (
    <>
      <div className="drink">
        <div className="drink__product">
          <div className="drink__cup">
            <img src={image} alt={name} />
          </div>
          <div className="drink__info">
            <h3>{name}</h3>
              {layers.map((layer, index) => (
                <Layer key={index} color={layer.color} label={layer.label} />
              ))}
          </div>
        </div>
        <form className="drink__controls" data-id={id}>
          <input type="hidden" className="order-id" value={id} />
          <button className="order-btn " type="submit">
            Objednat
          </button>
        </form>
      </div>
  </>
)



