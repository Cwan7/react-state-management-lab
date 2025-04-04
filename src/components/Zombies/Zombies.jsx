const ZombieFighter = (prop) => {
    return (
    <>
        <img src={fighter.img} />
        <p>Name: {fighter.name} </p>
        <p>Cost: ${fighter.price} </p>
        <p>Strength: {fighter.strength}</p>
        <p>Agility: {fighter.agility}</p>
        <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
     </>
    );
};
export default ZombieFighter;