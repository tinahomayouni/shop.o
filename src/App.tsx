import Button from "./uiKit/button/button";

function App() {
  return (
    <>
      <h1>This is my app</h1>
      <div>
        <p> this is about my app</p>
        <Button
          text="-"
          color="white"
          background="Red"
          onClick={() => alert("removed")}
        />
        <Button
          text="+"
          color="white"
          background="Green"
          onClick={() => alert("added")}
        />
      </div>
    </>
  );
}

export default App;
