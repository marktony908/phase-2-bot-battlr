import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ bots, onRemoveBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {bots.map(bot => (
        <BotCard
          key={bot.id}
          bot={bot}
          onBotClick={onRemoveBot}
          onDeleteBot={onRemoveBot}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
