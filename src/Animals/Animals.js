import './Animals.css';

export default function Animals({ name, type, says }) {
  return (
    <div className='animal-card'>
      <p>{name}</p>
      <img src={`/images/${type}.png`}/>
      <p>{type}</p>
      <p>{says}</p>
    </div>
  );
}