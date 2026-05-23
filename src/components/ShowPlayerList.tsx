import React, { useState, useEffect } from 'react';
import { getPlayerList } from '../api/players';


interface Player {
    name: string;
}
export function ShowPlayerList() {
    /*const playerlist: Player[]=[
            {name:"jake"},
            {name:"SK"},
            {name:"michael"}
    ];*/

    const [list, setList] = useState<Player[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getPlayerList();
            setList(result);
        }
        fetchData();
    }, []);



    return (
        <div className="playerList">
            <table>
                <thead>
                    <th>Player Names</th>
                </thead>
                {list.map((Player) => (
                    <tr>
                        <td>{Player.name}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
};
