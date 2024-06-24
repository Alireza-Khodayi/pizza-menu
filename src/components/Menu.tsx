import { pizzaData } from '../data';
import Pizza from './Pizza';

export default function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {pizzaData ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className='pizzas'>
            {pizzaData.map(pizza => (
              <Pizza
                key={pizza.id}
                name={pizza.name}
                ingredients={pizza.ingredients}
                photoName={pizza.photoName}
                price={pizza.price}
                soldOut={pizza.soldOut}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later!</p>
      )}
    </main>
  );
}
