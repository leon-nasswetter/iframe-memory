import React, { useState, useEffect } from "react";
import Alert from "react-popup-alert";
import { createBoard, createBoard2 } from "./setup";
import { shuffleArray } from "./utils";
import { CardType } from "./setup";
import Card from "./components/Card/Card";
import "react-popup-alert/dist/index.css";
// Styles
import { Grid } from "./App.styles";
import "./App.css";

const App = () => {
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [turns, setTurns] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [activeBoard, setActiveBoard] = useState(1);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(
    undefined
  );

  const [alert, setAlert] = useState({
    type: "success",
    text: `Gesamte Züge: ${turns}`,
    show: false,
  });

  function onCloseAlert() {
    setAlert({
      type: "",
      text: "",
      show: false,
    });
  }

  function onShowAlert() {
    setAlert({
      type: "success",
      text: `Gesamte Züge: ${turns}`,
      show: true,
    });
  }

  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      console.log("Game Won");
      setGameWon(true);
    }
  }, [matchedPairs]);

  const handleCardClick = (currClickedCard: CardType) => {
    // flip card
    setCards((prev) =>
      prev.map((card) =>
        card.id === currClickedCard.id
          ? { ...card, flipped: true, clickable: false }
          : card
      )
    );
    // if this is first card flipped
    //just keep it flipped
    if (!clickedCard) {
      setClickedCard({ ...currClickedCard });
      return;
    }
    // if match
    if (clickedCard.matchingCardId === currClickedCard.id) {
      setMatchedPairs((prev) => prev + 1);
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currClickedCard.id
            ? { ...card, clickable: false }
            : card
        )
      );
      setClickedCard(undefined);
      setTurns(turns + 1);
      return;
    }
    // if not match

    setTimeout(() => {
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currClickedCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
        )
      );
    }, 1000);
    setTurns(turns + 1);
    setClickedCard(undefined);
  };

  const board1 = () => {
    setCards(shuffleArray(createBoard()));
    setGameWon(false);
    setMatchedPairs(0);
    setTurns(0);
    setActiveBoard(1);
  };

  const board2 = () => {
    setCards(shuffleArray(createBoard2()));
    setGameWon(false);
    setMatchedPairs(0);
    setTurns(0);
    setActiveBoard(2);
  };

  // reset game
  // const resetGame = () => {
  //   setCards(shuffleArray(createBoard()));
  //   setGameWon(false);
  //   setMatchedPairs(0);
  //   setTurns(0);
  // };

  // game won message
  useEffect(() => {
    if (gameWon === true) {
      onShowAlert();
    }
  }, [gameWon]);

  return (
    <div className="container">
      <Alert
        header={"Gewonnen!"}
        btnText={"Schliessen"}
        text={alert.text}
        type={alert.type}
        show={alert.show}
        onClosePress={onCloseAlert}
        pressCloseOnOutsideClick={true}
        showBorderBottom={true}
        alertStyles={{}}
        headerStyles={{}}
        textStyles={{}}
        buttonStyles={{}}
      />
      <Grid>
        {cards.map((card) => (
          <Card key={card.id} card={card} callback={handleCardClick} />
        ))}
      </Grid>
      {/* rest button */}
      <div>
        <button className="disabled">
          Züge:
          <br />
          {turns}
        </button>
      </div>
      <div className="selection">
        <button
          className={activeBoard === 1 ? "activeBoard" : ""}
          onClick={board1}
        >
          {gameWon && activeBoard === 1 ? "Neues Spiel" : "Disney World"}
        </button>
        <button
          className={activeBoard === 2 ? "activeBoard" : ""}
          onClick={board2}
        >
          {gameWon && activeBoard === 2 ? "Neues Spiel" : "Florida"}
        </button>
      </div>
    </div>
  );
};

export default App;
