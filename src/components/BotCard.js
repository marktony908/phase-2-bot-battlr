import React from 'react';

function BotCard({ bot, onBotClick, onDeleteBot }) {
  return (
    <div className="bot-card" onClick={() => onBotClick(bot)}>
      <h2>{bot.name}</h2>
      <p>Class: {bot.bot_class}</p>
      <img src={bot.avatar_url} alt={bot.name} />
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDeleteBot(bot.id);
        }}
      >
        Discharge
      </button>
    </div>
  );
}

export default BotCard;
