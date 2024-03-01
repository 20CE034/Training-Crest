export default function Player({name, symbol,}){
    return <li><span className="player">
    <spam className="player-name">{name}</spam>
    <spam className="player-symbol">{symbol}</spam>
  </span>
    <button>Edit</button>
  </li>;
}