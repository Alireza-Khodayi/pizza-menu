interface ICloseHour {
  closeHour: number;
}

export default function Order({ closeHour }: ICloseHour) {
  return (
    <div className='order'>
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className='btn'>Order</button>
    </div>
  );
}
