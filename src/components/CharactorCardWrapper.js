import { useRef, useState, useEffect } from 'react';

const CharactorCardWrapper = ({ CardData }) => {
  const charactorCard = useRef(null);
  const [cardMessage, setCardMessage] = useState('');

  const cardMessageChange = (e) => {
    const message = e.detail.message;
    setCardMessage(message);
  };
  const cardFollowMessage = (e) => {
    const id = e.detail.id;
    setCardMessage(id);
  };
  useEffect(() => {
    charactorCard.current.cardValues = CardData;
    charactorCard.current.populateCard();
    charactorCard.current.addEventListener(
      'message-button-click',
      cardMessageChange
    );
    charactorCard.current.addEventListener(
      'follow-button-click',
      cardFollowMessage
    );
    return () => {
      charactorCard.current.removeEventListener(
        'message-button-click',
        cardMessageChange
      );
      charactorCard.current.removeEventListener(
        'follow-button-click',
        cardFollowMessage
      );
    };
  }, [CardData]);
  console.log(cardMessage);
  return <character-card ref={charactorCard}></character-card>;
};

export default CharactorCardWrapper;
