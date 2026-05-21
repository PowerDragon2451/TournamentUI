
import axios from 'axios';

export async function addPlayer(responseId:string) {
   
    let url="http://localhost:8080/tournament/add-player";


    const myPlayer = { name: "Siva", fileName: "TournamentPlayers.txt" };


  try{
    let res= await axios.post(url,myPlayer);
    (document.getElementById(responseId) as HTMLInputElement).innerText=res.data;
  }catch(exception){
    
    (document.getElementById(responseId)as HTMLInputElement).innerText="Exception Occured" +exception;
  }
};

export async function addNewPlayer(playername:string) {
   
    let url="http://localhost:8080/tournament/add-player";


    const myPlayer = { name:playername, fileName: "TournamentPlayers.txt" };

  try{
    let res= await axios.post(url,myPlayer);

    return res.data ;

  }catch(exception){
    
    return "Exception Occured" + exception;
  }
};

