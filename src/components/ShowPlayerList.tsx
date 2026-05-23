import React, { useState } from 'react';
import { getPlayerList } from '../api/players';

interface Player{
    name:string;
}
export function ShowPlayerList(){
    const Players=getPlayerList();//Gets a list from the backend
    
    
    
    return(
        <div> 

        </div>
    )
};
