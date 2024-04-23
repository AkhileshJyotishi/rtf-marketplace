"use client"
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';

interface Player {
  rank:number,
  artist:string,
  img_url:string,
  change:number,
  sold:number,
  volume:number,
}

interface LeaderboardData {
  players: Player[];
}

const Leaderboard: React.FC = () => {
  const data1 = {
    players: [
      { rank: 1,artist:"Ruben Carder",img_url:"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1713909223~exp=1713909823~hmac=132dbc0036f79d587a41182ebf9e2560693a6a133335bd479511e55f57dab668", change: +1.4,sold:13,volume:11.14 },
      { rank: 2,artist:"Ruben Carder",img_url:"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1713909223~exp=1713909823~hmac=132dbc0036f79d587a41182ebf9e2560693a6a133335bd479511e55f57dab668", change: +1.4,sold:13,volume:11.14 },
      { rank: 3,artist:"Ruben Carder",img_url:"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1713909223~exp=1713909823~hmac=132dbc0036f79d587a41182ebf9e2560693a6a133335bd479511e55f57dab668", change: +1.4,sold:13,volume:11.14 },
      { rank: 4,artist:"Ruben Carder",img_url:"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1713909223~exp=1713909823~hmac=132dbc0036f79d587a41182ebf9e2560693a6a133335bd479511e55f57dab668", change: +1.4,sold:13,volume:11.14 },
      { rank: 5,artist:"Ruben Carder",img_url:"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1713909223~exp=1713909823~hmac=132dbc0036f79d587a41182ebf9e2560693a6a133335bd479511e55f57dab668", change: +1.4,sold:13,volume:11.14 },
      { rank: 6,artist:"Ruben Carder",img_url:"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1713909223~exp=1713909823~hmac=132dbc0036f79d587a41182ebf9e2560693a6a133335bd479511e55f57dab668", change: +1.4,sold:13,volume:11.14 },
      { rank: 7,artist:"Ruben Carder",img_url:"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1713909223~exp=1713909823~hmac=132dbc0036f79d587a41182ebf9e2560693a6a133335bd479511e55f57dab668", change: -1.4,sold:13,volume:11.14 },
    ],
  };

  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = data1;
      setPlayers(data.players);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 rounded-lg shadow-md max-w-6xl mx-auto mt-56">
      <h1 className="text-2xl font-bold mb-4 ml-4 text-white">Leaderboard</h1>
      <table className="w-full text-left max-w-6xl mx-auto">
        <thead className='flex flex-col mb-12' >
          <tr className='px-4 py-2 bg-transparent border border-gray-600 rounded-full flex flex-row justify-between'>
            <th className="text-sm font-medium flex items-center text-gray-600">#</th>
            <th className="text-sm font-medium flex items-center text-gray-600">Artist</th>
            <th className="text-sm font-medium flex items-center text-gray-600">Change</th>
            <th className="text-sm font-medium flex items-center text-gray-600">NFTs Sold</th>
            <th className="text-sm font-medium flex items-center text-gray-600">Volume</th>
          </tr>
        </thead>
        <tbody className='flex flex-col gap-8'>
          {players.map((player) => (
            <tr key={player.rank} className="px-4 py-2 bg-gray-600 text-white rounded-full flex flex-row justify-between">
              <td className="text-sm flex items-center font-medium"><div className='bg-gray-800 text-gray-500 rounded-full inline-block text-center px-3 py-1.5'>{player.rank}</div></td>
              <td className="text-sm font-medium flex flex-row gap-4 items-center"><img src={player.img_url} className='w-10 h-10 rounded-full' />{player.artist}</td>
              <td className={`text-sm font-medium flex items-center ${(player.change>0?`text-green-500`:`text-red-400`)}`}>{(player.change>0)?`+${player.change}`:`${player.change}`} %</td>
              <td className="text-sm font-medium flex items-center">{player.sold}</td>
              <td className="text-sm font-medium flex items-center">{player.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;