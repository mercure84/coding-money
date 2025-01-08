"use client";
import { useState } from "react";
import Image from "next/image";
import { getMoney } from "../../utils/getMoney";

export default function Home() {
  const [number, setNumber] = useState(4);
  const [money, setMoney] = useState({ nb2: 0, nb5: 0, nb10: 0 });
  const handleWithdrow = () => {
    const myMoney = getMoney(number);
    setMoney(myMoney);
  };
  const handleReset = () => {
    setNumber(4);
    setMoney({ nb2: 0, nb5: 0, nb10: 0 });
  };
  const { nb2, nb5, nb10 } = money;

  return (
    <div className="flex flex-col justify-center m-16 w-8/12 self-center">
      <div className="flex flex-col self-center">
        <div className="mb-8">
          <p className="mb-8">Saisir un montant :</p>
          <input
            className="input input-bordered w-full max-w-xs"
            min={4}
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-row">
          <div className=" m-8">
            <button className="btn" onClick={handleWithdrow}>
              Retirer
            </button>
          </div>
          <div className=" m-8">
            <button className="btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around mt-8">
        {nb2 > 0 && (
          <>
            <p>{nb2}</p>
            <Image
              width={96}
              // eslint-disable-next-line @typescript-eslint/no-require-imports
              src={require("@/app/assets/2euros.jpg")}
              alt="2 euros"
            />
          </>
        )}
        {nb5 > 0 && (
          <>
            <p>{nb5}</p>
            <Image
              width={192}
              // eslint-disable-next-line @typescript-eslint/no-require-imports
              src={require("@/app/assets/5euros.png")}
              alt="2 euros"
            />
          </>
        )}
        {nb10 > 0 && (
          <>
            <p>{nb10}</p>
            <Image
              width={192}
              // eslint-disable-next-line @typescript-eslint/no-require-imports
              src={require("@/app/assets/10euros.png")}
              alt="2 euros"
            />
          </>
        )}
      </div>
    </div>
  );
}
