import { useState } from 'react';
import './App.css'

const App = () => {
  const [team, setTeam] = useState([]);
  const [strength, setStrength] = useState(0);
  const [agility, setAgility] = useState(0);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);

  const updateStats = (newTeamArr) => {
    const updatedStrength = newTeamArr.reduce((acc, fighter) => acc + fighter.strength, 0);
    const updatedAgility = newTeamArr.reduce((acc, fighter) => acc + fighter.agility, 0);
    setStrength(updatedStrength);
    setAgility(updatedAgility);
  };

  const handleAddFighter = (fighterIdx) => {
    const newFighter = zombieFighters[fighterIdx];
    const newTeamArr = [...team, newFighter];
    if (newFighter.price <= money) {
      setMoney(money - newFighter.price);
      setTeam(newTeamArr);
      updateStats(newTeamArr);
    } else {
      console.log('Not enough money');
    };
  };

  const handleRemoveFighter = (fighterIdx) => {
    const removedFighter = team[fighterIdx];
    const newTeamArr = [...team];
    newTeamArr.splice(fighterIdx, 1);
    setMoney(money + removedFighter.price);
    setTeam(newTeamArr);
    updateStats(newTeamArr);
  };

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {strength}</h2>
      <h2>Team Agility: {agility}</h2>
      <h2>Team</h2>
      <ul>
        {team.length ?
          <>
            {team.map((fighter, i) => (
              <li key={i}>
                <img src={fighter.img} />
                <p>{fighter.name}</p>
                <p>Price: {fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={() => handleRemoveFighter(i)}>Remove</button>
              </li>
            ))}
          </> :
          <li>Pick some team members</li>
        }
      </ul>
      <h2>Fighters</h2>
      <ul>
        {zombieFighters.map((fighter, i) => (
          <li key={i}>
            <img src={fighter.img} />
            <p>{fighter.name}</p>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(i)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App
