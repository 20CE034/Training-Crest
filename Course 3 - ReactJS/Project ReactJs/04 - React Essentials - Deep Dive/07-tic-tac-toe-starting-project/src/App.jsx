import Player from "./components/Players";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
         <Player name="Player 1" symbol="X"/>
         <Player name="Player 2" symbol="0"/>
        </ol>
      </div>
    </main>
  );
}

export default App;
