import Order from './Order';

export default function Footer() {
  const hour = new Date().getHours();
  const openHour: number = 12;
  const closeHour: number = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}
