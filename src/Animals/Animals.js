import './Animals.css';

export default function AnimalList({ name, type, says }) {
  return (
    <div className='animalCard'>
      <p>{name}</p>
      <img className='img' src={`/AnimalImages/${type}.svg`}/>
      <p>{type}</p>
      <p>{says}</p>
    </div>
  );
}