
import { useEffect, useRef, useState } from 'react';
import InputBox from './component/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  function swap() {
    const temp = from;
    setFrom(to);
    setTo(temp);
  }

  const currencyInfo = useCurrencyInfo(from);

  const currencyKeys = currencyInfo ? Object.keys(currencyInfo) : [];

  const handleOnClick = (e) => {
    e.preventDefault();
    setConvertedAmount(calculate(amount, from, to));
  }

  const onAmountChange = (e) => {
    let value = e.target.value;
    setAmount(value);
  }

  const calculate = (amount, from, to) => {
    if (currencyInfo && currencyInfo[to]) {
      return amount * currencyInfo[to];
    }
    return 0;
  }

  const onCurrencyChange = (e) => {
    setFrom(e.target.value);
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
          >
            <div className="w-full mb-1">
              <InputBox label="From"
                currencyOption={currencyKeys}
                selectCurrency={from}
                amount={amount}
                onAmountChange={onAmountChange}
                //todo - need to deep dive in future to understand the below line
                onCurrencyChange={currency => setFrom(currency)} />

            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={() => swap()}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To"
                currencyOption={currencyKeys}
                selectCurrency={to}
                onCurrencyChange={currency => setTo(currency)}
                amount={convertedAmount}
                onAmountChange={onAmountChange}
              ></InputBox>
            </div>
            <button type="submit" onClick={handleOnClick} className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
