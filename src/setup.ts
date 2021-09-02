import set1Card1 from "./img.disney/card_1.jpg";
import set1Card2 from "./img.disney/card_2.jpg";
import set1Card3 from "./img.disney/card_3.jpg";
import set1Card4 from "./img.disney/card_4.jpg";
import set1Card5 from "./img.disney/card_5.jpg";
import set1Card6 from "./img.disney/card_6.jpg";
import set1Card7 from "./img.disney/card_7.jpg";
import set1Card8 from "./img.disney/card_8.jpg";

import set2Card1 from "./img.florida/card_1.jpg";
import set2Card2 from "./img.florida/card_2.jpg";
import set2Card3 from "./img.florida/card_3.jpg";
import set2Card4 from "./img.florida/card_4.jpg";
import set2Card5 from "./img.florida/card_5.jpg";
import set2Card6 from "./img.florida/card_6.jpg";
import set2Card7 from "./img.florida/card_7.jpg";
import set2Card8 from "./img.florida/card_8.jpg";

import set3Card1 from "./img.oma/card_1.jpg";
import set3Card2 from "./img.oma/card_2.jpg";
import set3Card3 from "./img.oma/card_3.jpg";
import set3Card4 from "./img.oma/card_4.jpg";
import set3Card5 from "./img.oma/card_5.jpg";
import set3Card6 from "./img.oma/card_6.jpg";
import set3Card7 from "./img.oma/card_7.jpg";
import set3Card8 from "./img.oma/card_8.jpg";

// cardback
import cardBack from "./img.disney/card_back.jpg";
import cardBack2 from "./img.florida/card_back.jpg";
import cardBack3 from "./img.oma/card_back.jpg";

export type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
};
const cards: string[] = [
  set1Card1,
  set1Card2,
  set1Card3,
  set1Card4,
  set1Card5,
  set1Card6,
  set1Card7,
  set1Card8,
];

const cards2: string[] = [
    set2Card1,
    set2Card2,
    set2Card3,
    set2Card4,
    set2Card5,
    set2Card6,
    set2Card7,
    set2Card8,
  ];

  const cards3: string[] = [
    set3Card1,
    set3Card2,
    set3Card3,
    set3Card4,
    set3Card5,
    set3Card6,
    set3Card7,
    set3Card8,
  ];

export const createBoard = (): CardType[] =>
  [...cards, ...cards].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: cardBack2,
    frontImage: card,
    clickable: true,
    matchingCardId:
      i < cards.length ? `card${i + cards.length}` : `card${i - cards.length}`,
  }));

export const createBoard2 = (): CardType[] =>
  [...cards2, ...cards2].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: cardBack2,
    frontImage: card,
    clickable: true,
    matchingCardId:
      i < cards2.length ? `card${i + cards2.length}` : `card${i - cards2.length}`,
  }));

  export const createBoard3 = (): CardType[] =>
  [...cards3, ...cards3].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: cardBack2,
    frontImage: card,
    clickable: true,
    matchingCardId:
      i < cards3.length ? `card${i + cards3.length}` : `card${i - cards3.length}`,
  }));
