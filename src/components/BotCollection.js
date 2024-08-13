import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';

function BotCollection({ onBotClick, onDeleteBot }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);
S
  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard
          key={bot.id}
          bot={bot}
          onBotClick={onBotClick}
          onDeleteBot={onDeleteBot}
        />
      ))}
    </div>
  );
}

export default BotCollection;

//Random change
