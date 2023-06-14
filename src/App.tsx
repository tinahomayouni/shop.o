import CardHolder from "./uiKit/cardHolder/cardHolder";

function App() {
  return (
    <>
      <h1>This is my app</h1>
      <CardHolder direction="row" column={10}>
        {Array.from(new Array(6)).map((count, key) => {
          return <div key={key}>this is card {count}</div>;
        })}
      </CardHolder>
    </>
  );
}

export default App;
