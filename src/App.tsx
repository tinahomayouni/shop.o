import Button from "./uiKit/button/button";
import { Color } from "./uiKit/button/button";
=======

function App() {
  return (
    <>
      <h1>This is my app</h1>
      <div>
        buttom
        <p> this is about my app</p>
        <Button
          text="-"
          pen="white"
          background={Color.red}
          onClick={() => alert("removed")}
        />
        <Button
          text="+"
          pen="white"
          background={Color.green}
          onClick={() => alert("added")}
        />

        
      </div>
    </>
  );
}

export default App;
