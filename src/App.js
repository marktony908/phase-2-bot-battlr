import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './App.css';

function App() {
  const [army, setArmy] = useState([]);

  const addBotToArmy = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeBotFromArmy = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

  const deleteBot = (botId) => {
    fetch(`{botId}`, {
      method: 'DELETE',
    })
    .then(() => {
      setArmy(army.filter(bot => bot.id !== botId));
      // Optionally, remove from BotCollection as well
    });
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <YourBotArmy bots={army} onRemoveBot={removeBotFromArmy} />
      <BotCollection onBotClick={addBotToArmy} onDeleteBot={deleteBot} />
    </div>
  );
}

export default App;
