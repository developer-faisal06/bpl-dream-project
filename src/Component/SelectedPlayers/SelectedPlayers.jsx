import React from 'react';

const SelectedPlayers = ({ selectedPlayers,removePlayer,setToggle }) => {

 
    // console.log(selectedPlayers)
    return (
        <div className='container mx-auto px-4' >
            <h2>Selected player</h2>
            <div>
                {
                    selectedPlayers.map(player => 
                    
                        <div className="selected-card flex gap-5 items-center justify-between border-2 mb-2 rounded-2xl p-2 bg-blue-800 ">
                            <div className="flex items-center gap-4">
                                <img className='rounded-xl w-[150px] h-[100px] object-cover' src={player.player_image} alt="" srcset="" />
                                <div className="info ">
                                    <h4 className='font-bold text-2xl'>{player.player_name}</h4>
                                    <h6>{player.bating_style}</h6>
                                </div>
                            </div>

                            <button onClick={()=>removePlayer(player)} className="btn">
                                <div className=' bg-red-500 px-2 text-2xl '>X</div>
                            </button>
                        </div>
                    )
                }
                 <button onClick={()=>setToggle(true)} className="btn border-0 rounded-none text-[#000] m-0 rounded-xl bg-[#E7FE29]"  >Add More Player</button>
            </div>
        </div>
    );
};

export default SelectedPlayers;