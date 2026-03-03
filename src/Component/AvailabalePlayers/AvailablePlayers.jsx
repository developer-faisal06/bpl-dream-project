import React, { use } from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';

const AvailabalePlayers = ({ PlayerPromiss,setBalance,balance, setSelectedPlayers,selectedPlayers }) => {

    const playerData = use(PlayerPromiss);

    // console.log(playerData);

    // const {mage, name, country, rating}=playerData;

    // {
    //     "id": 6,
    //     "player_image": "https://images.unsplash.com/photo-1608010669348-1e196f7e0429?q=80&w=600&h=400&auto=format&fit=crop",
    //     "player_name": "Litton Das",
    //     "player_country": "Bangladesh",
    //     "player_role": "Wicketkeeper Batsman",
    //     "rating": 8.4,
    //     "bating_style": "Right-hand bat",
    //     "bowing_style": "N/A",
    //     "price": "65,00,000 BDT"
    // }

    return (
        <div className='container mx-auto px-4 ' >
           
            <div className="players-cards grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4  ">
                {
                    playerData.map(player =><PlayerCard setBalance={setBalance} 
                    balance={balance} 
                    player={player}
                    setSelectedPlayers={setSelectedPlayers}
                    selectedPlayers={selectedPlayers}
                     ></PlayerCard>)
                }
            </div>
        </div>
    );
};

export default AvailabalePlayers;