import './Animals.css';

export default function Animals({ name, type, says }) {
  return (
    <div className='animalCard'>
      <p>{name}</p>
      <img src={`/AnimalImages/${type}.png`}/>
      <p>{type}</p>
      <p>{says}</p>
    </div>
  );
}