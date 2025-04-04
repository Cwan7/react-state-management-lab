import { useState } from 'react';
import FighterCard from './components/Zombies/Zombies.jsx';
import TeamCard from './components/TeamCard/TeamCard.jsx';
import TeamIndex from './components/TeamIndex/TeamIndex.jsx';
import './App.css';

const App = () => {
const [ zombieFighters, setZombieFighters ] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]
)
const [ team, setTeam ] = useState([]);
const [ money, setMoney ] = useState(100);
let totalStrength = 0;
let totalAgility = 0;

const handleAddFighter = (fighter) => {
  console.log('money:', money, 'price', fighter.price, 'strength', fighter.strength)
  if(money >= fighter.price) {
    const newTeam = [...team, fighter];
    setTeam(newTeam);
    setMoney(money - fighter.price);
    const index = zombieFighters.findIndex((index) => index.id === fighter.id);
    const newFighters = [...zombieFighters];
    newFighters.splice(index, 1);
    setZombieFighters(newFighters);
  } else {
    alert('Not Enough Money')
  }
}
team.forEach((fighter) => {
  totalStrength = totalStrength + fighter.strength
})
team.forEach((fighter) => {
  totalAgility = totalAgility + fighter.agility;
})
const handleRemoveFighter = (fighter) => {
  const index = team.findIndex((index) => index.id === fighter.id);
  const newTeam = [...team];
  newTeam.splice(index, 1);
  setTeam(newTeam);
  const newFighters = [...zombieFighters, fighter];
  setZombieFighters(newFighters);
  setMoney(money + fighter.price);
}
  return (
    <div>
      <div>
        <TeamIndex 
        team={team} 
        money={money} 
        strength={totalStrength} 
        agility={totalAgility}
        />
        <ul>
          {team.map((fighter) => (
            <TeamCard 
            key={fighter.id}
            fighter={fighter}
            handleRemoveFighter={handleRemoveFighter}
            />
          ))}
        </ul>
      </div>
      <div>
        <h1>Zombie Fighters!</h1>
        <ul>
          {zombieFighters.map((fighter) => (
            <FighterCard 
            key={fighter.id} 
            fighter={fighter} 
            handleAddFighter={handleAddFighter}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App
