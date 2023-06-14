import Card from "./uiKit/card/card";

function App() {
  return (
    <>
      <h1>This is my app</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Card
          direction="column"
          text="salam this is text"
          column={4}
          boxShadow="yes"
        >
          <h3>Hi H3</h3>
        </Card>
      </div>
    </>
  );
}

export default App;
