import "./App.css";
import React, { useState } from "react";

function App() {
  const [inputNumber, setInputNumber] = useState("");
  const [isStatus, setIsStatus] = useState({
    isPrime: false,
    isFibonacci: false,
  });

  const [selectstatus, setSelectStatus] = useState("isPrime");

  const handleChangeInput = (e) => {
    let roundValue = Math.round(e.target.value);
    if (roundValue < 0) {
      if (selectstatus === "isPrime") {
        setInputNumber(1);
        primeNumber(roundValue);
      } else {
        setInputNumber(1);
        fibonacciNumber(roundValue);
      }
    } else {
      if (roundValue === 0) {
        if (selectstatus === "isPrime") {
          setInputNumber("");
          primeNumber(roundValue);
        } else {
          setInputNumber(0);
          fibonacciNumber(roundValue);
        }
      } else {
        if (selectstatus === "isPrime") {
          setInputNumber(roundValue);
          primeNumber(roundValue);
        } else {
          setInputNumber(roundValue);
          fibonacciNumber(roundValue);
        }
      }
    }
  };

  const handleChangeSelect = (e) => {
    if (e.target.value === "isPrime") {
      setSelectStatus(e.target.value);
      primeNumber(inputNumber);
    } else {
      setSelectStatus(e.target.value);
      fibonacciNumber(inputNumber);
    }
  };

  const primeNumber = (number) => {
    if (number > 2 && number % 2 === 0) {
      setIsStatus({ ...isStatus, ["isPrime"]: false });
    } else {
      if (number === "") {
        setIsStatus({ ...isStatus, ["isPrime"]: false });
      } else if (number === 2) {
        setIsStatus({ ...isStatus, ["isPrime"]: true });
      } else if (number === 1) {
        setIsStatus({ ...isStatus, ["isPrime"]: true });
      } else if (number === 0) {
        setIsStatus({ ...isStatus, ["isPrime"]: false });
      } else {
        let top = Math.sqrt(number) + 1;
        for (let index = 2; index < top; index += 2) {
          if (number % index === 0) {
            setIsStatus({ ...isStatus, ["isPrime"]: false });
            break;
          } else {
            setIsStatus({ ...isStatus, ["isPrime"]: true });
          }
        }
      }
    }
  };

  const fibonacciNumber = (number) => {
    const isPerfectSquare = (calculate) => {
      let s = parseInt(Math.sqrt(calculate));
      return s * s === calculate;
    };

    if (number === 0) {
      setIsStatus({ ...isStatus, ["isFibonacci"]: true });
    } else {
      if (
        isPerfectSquare(5 * number * number + 4) ||
        isPerfectSquare(5 * number * number - 4)
      ) {
        setIsStatus({ ...isStatus, ["isFibonacci"]: true });
      } else {
        setIsStatus({ ...isStatus, ["isFibonacci"]: false });
      }
    }
  };

  return (
    <div>
      <div className="row-align">
        <div className="col-width200px">
          <input
            className="input-align"
            type="number"
            value={inputNumber}
            onChange={handleChangeInput}
          />
        </div>
        <div className="col-middle">
          <select
            name="calculation-selections"
            id="calculation-selections"
            onChange={handleChangeSelect}
            value={selectstatus}
          >
            <option value="isPrime">isPrime</option>
            <option value="isFibonanchi">isFibonanchi</option>
          </select>
        </div>
        <div className="col-width300px">
          {selectstatus === "isPrime"
            ? isStatus.isPrime
              ? "true"
              : "false"
            : isStatus.isFibonacci
            ? "true"
            : "false"}
        </div>
      </div>
    </div>
  );
}

export default App;
