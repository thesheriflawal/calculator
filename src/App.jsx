import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="container">
        <div className="calculator">
          <form action="">
            <div className="display">
              <input type="text" value={value} readOnly />
            </div>
            <div className="key-pads">
              <input type="button" value="AC" onClick={() => setValue("")} />
              <input type="button" value="DE" onClick={() => setValue(value.slice(0, -1))} />
              <input type="button" value="." onClick={() => setValue(value + ".")} />
              <input type="button" value="/" onClick={() => setValue(value + "/")} />
              <input type="button" value="7" onClick={() => setValue(value + "7")} />
              <input type="button" value="8" onClick={() => setValue(value + "8")} />
              <input type="button" value="9" onClick={() => setValue(value + "9")} />
              <input type="button" value="*" onClick={() => setValue(value + "*")} />
              <input type="button" value="4" onClick={() => setValue(value + "4")} />
              <input type="button" value="5" onClick={() => setValue(value + "5")} />
              <input type="button" value="6" onClick={() => setValue(value + "6")} />
              <input type="button" value="+" onClick={() => setValue(value + "+")} />
              <input type="button" value="1" onClick={() => setValue(value + "1")} />
              <input type="button" value="2" onClick={() => setValue(value + "2")} />
              <input type="button" value="3" onClick={() => setValue(value + "3")} />
              <input type="button" value="-" onClick={() => setValue(value + "-")} />
              <input type="button" value="00" onClick={() => setValue(value + "00")} />
              <input type="button" value="0" onClick={() => setValue(value + "0")} />
              <input
                type="button"
                value="="
                onClick={() => {
                  try {
                    setValue(eval(value).toString());
                  } catch {
                    setValue("Error");
                  }
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
