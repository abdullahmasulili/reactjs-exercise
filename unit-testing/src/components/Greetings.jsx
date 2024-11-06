import { useState } from "react";
import Text from "./Text";

export default function Greetings() {
  const [changedText, setChangedText] = useState(false);

  function handleChangeText() {
    setChangedText(true);
  }

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Text>It&apos;s good to see you</Text>}
      {changedText && <Text>Changed!</Text>}
      <button onClick={handleChangeText}>Change Text</button>
    </div>
  );
}
