import React from 'react';
import Goblin from './Goblin';

export default function GoblinList({ handleDeleteGoblin, goblins }) {
  return (
    <div className='goblin-list quarter'>
      {
        goblins.map((goblin, i) => <div key={goblin.name + i}> 
          <Goblin goblin={goblin} handleDeleteGoblin={handleDeleteGoblin} />


        </div>
        )}
    </div>
  );
}