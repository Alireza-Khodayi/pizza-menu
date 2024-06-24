import { IPizza } from '../types/IPizza';
export default function Pizza({
  name,
  ingredients,
  photoName,
  price,
  soldOut,
}: IPizza) {
  return (
    <li className={`pizza ${soldOut && 'sold-out'}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        {soldOut ? <span>Sold Out</span> : <span>{price}$</span>}
      </div>
    </li>
  );
}
