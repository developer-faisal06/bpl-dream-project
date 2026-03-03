
import { ToastContainer } from 'react-toastify'
import './App.css'
import AvailabalePlayers from './Component/AvailabalePlayers/AvailablePlayers'
import Navbar from './Component/Navbar/Navbar'
import SelectedPlayers from './Component/SelectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react'

const playersData=async()=>{
  const res=fetch('/players.json')
  return (await res).json()
}

const PlayerPromiss=playersData();


function App() {
const [toggle, setToggle]=useState(true);
const [balance,setBalance]=useState(800000000);
const [selectedPlayers, setSelectedPlayers]=useState([]);

const removePlayer=(player)=>{
  console.log(player)
  const filterdData=selectedPlayers.filter(play=>play.id !== player.id)
 setSelectedPlayers(filterdData)

 
 const plainBalanced=player.price.split("BDT").join('').split(",").join('')

setBalance(balance + parseInt(plainBalanced))
 
}
  return (
    <>
      <Navbar balance={balance} ></Navbar>


<div className='container mx-auto p-4 flex justify-between  items-center  '>
<h2 className='text-lg  font-bold' >
  {
    (toggle === true)?"Available Players":`Selected Players (${selectedPlayers.length}/6)`
  }
</h2>
<div className="">
  <button onClick={()=>setToggle(true)} className={`btn border-0 rounded-none text-[#000] m-0 rounded-l-xl ${toggle === true?"bg-[#E7FE29]":"bg-[#fff]"} `}  >Available</button>
  <button onClick={()=>setToggle(false)} className={`btn border-0 rounded-none text-[#000] m-0 rounded-r-xl ${toggle === true? "bg-[#fff]":"bg-[#E7FE29]"}`}   >Selected <span>({selectedPlayers.length})</span></button>
</div>
</div>

{
  toggle === true ?  <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
        <AvailabalePlayers
        setSelectedPlayers={setSelectedPlayers} 
        setBalance={setBalance} 
        balance={balance} 
        PlayerPromiss={PlayerPromiss}
        selectedPlayers={selectedPlayers}
        ></AvailabalePlayers>
      </Suspense> :  <SelectedPlayers 
      selectedPlayers={selectedPlayers}
      removePlayer={removePlayer}
      setToggle={setToggle}
      ></SelectedPlayers>
}

     


     <ToastContainer />

    </>
  )
}

export default App
