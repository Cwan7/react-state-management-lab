const FighterCard = ({fighter, handleAddFighter}) => {
    return (
    <li>
        <img src={fighter.img} />
        <p>Name: {fighter.name} </p>
        <p>Cost: ${fighter.price} </p>
        <p>Strength: {fighter.strength}</p>
        <p>Agility: {fighter.agility}</p>
        <button onClick={() => handleAddFighter(fighter)}>Add</button>
     </li>
    );
};
export default FighterCard;