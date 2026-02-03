"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about an ice cream date?",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to my ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Yie mewu",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
   <div className="-mt-16 flex min-h-screen flex-col items-center justify-center px-4 text-center">
  {yesPressed ? (
    <>
      <img
        className="w-40 sm:w-56 md:w-64"
        src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
        alt="Bear kiss"
      />
      <div className="my-4 text-2xl font-bold sm:text-3xl md:text-4xl">
        WOOOOOO!!! I love you pookie!! ;))
      </div>
    </>
  ) : (
    <>
      <img
        className="h-40 sm:h-48 md:h-[200px]"
        src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
        alt="Cute bear"
      />

      <h1 className="my-4 text-2xl font-bold sm:text-3xl md:text-4xl">
        Maabea, will you be my Valentine?
      </h1>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          className="rounded bg-green-500 px-6 py-3 font-bold text-white hover:bg-green-700"
          style={{ fontSize: yesButtonSize }}
          onClick={() => setYesPressed(true)}
        >
          Yes
        </button>

        <button
          onClick={handleNoClick}
          className="rounded bg-red-500 px-6 py-3 font-bold text-white hover:bg-red-700"
        >
          {noCount === 0 ? "No" : getNoButtonText()}
        </button>
      </div>
    </>
  )}
</div>

  );
}
