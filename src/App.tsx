import CardHolder from "./uiKit/cardHolder/cardHolder";

function App() {
  return (
    <>
      <h1>This is my app</h1>
      <CardHolder column={3}>
        <div>this is Card</div>
        <div>this is Card</div>
        <div>this is Card</div>
        <div>this is Card</div>
        <div>this is Card</div>
      </CardHolder>
    </>
  );
}

export default App;
