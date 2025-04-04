const TeamIndex = ({team, money, strength, agility}) => {
    return (
    <>
        <h1>{team.length > 0 ? 'Your Team!' : 'Add Fighter'}</h1>
        <h2>Bank: ${money}</h2>
        <h2>Teams Total Strength: {strength}</h2>
        <h2>Teams Total Agility: {agility}</h2>
    </>
    )
}
export default TeamIndex;