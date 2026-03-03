import React, { useState } from 'react';
import userLogo from '../../assets/usricon.png'
import flag from '../../assets/flag.png'
import { toast } from 'react-toastify';

const PlayerCard = ({player, setBalance,balance, selectedPlayers,setSelectedPlayers}) => {
    const [isSelected, setIsSelected]=useState(false)



    return (
        <div className="card bg-sky-100 shadow-sm">
                            <figure>
                                <img
                                    className='w-full h-[250px] object-cover'
                                    src={player.player_image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <div className='flex item-center '>
                                    <img src={userLogo} className='h-[25px] mt-1' alt="" />
                                    
                                     <h2 className="ml-2 card-title text-black text-2xl">{player.player_name}</h2>
                                </div>
                                <div className="identity flex justify-between items-center border-blue-500 border-b-2 pb-4  ">
                                     <div className='flex '>
                                    <img src={flag} className='h-[25px]' alt="" />
                                     <p className="ml-2 text-black text-gray-800 font-bold">{player.player_country}</p>
                                     
                                </div> 
                                <button className='btn' > All Rounder</button>
                                </div>
                                <div className='flex justify-between' >
                                    <p className=" text-black text-gray-800 font-bold">Rating:</p>
                                <span className=" text-black text-gray-800 font-bold">{player.rating}</span>
                                </div>

                                <div className="intro flex justify-between ">
                                     <p className=" text-black text-gray-800 font-bold">{player.bating_style}</p>
                                     <span className=" text-black text-gray-800 font-gray-200 font-bold">{player.bowing_style}</span>
                                </div>
                             
                                <div className="card-actions justify-between items-center ">
                                  <div className="flex">
                                    <p className=" text-black text-gray-800 font-gray-200 font-bold">Price:<span> {player.price} </span> </p>
                                  </div>
                                    <button disabled={isSelected} onClick={()=>{
                                        const plainPrice=player.price.split("BDT").join('').split(",").join('');
                                        const isAdded = selectedPlayers.map(p=> p.id !== player.id);
                                        console.log(isAdded)

                                        if(balance<plainPrice){
                                            toast("Not Available Coin");
                                            return;
                                        }
                                        if( selectedPlayers.length === 6){
                                            toast("Already sleceted 6 players");
                                            return;
                                        }
                                        
                                        setIsSelected(true) 
                                    setBalance(balance-plainPrice)
                                    const newSelected=[...selectedPlayers, player ]
                                    setSelectedPlayers(newSelected)
                                    toast("Player Added");
                                    }

                                    } className="btn btn-primary">{isSelected === true?"Selected":"Choose Player" }</button>
                                </div>
                            </div>
                        </div>
    );
};

export default PlayerCard;