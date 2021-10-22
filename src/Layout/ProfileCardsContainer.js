import CharactorCardWrapper from '../components/CharactorCardWrapper';

const ProfileCardsContainer = ({ contacts }) => {
  return (
    <div className="cards-container">
      {contacts.map((charactor) => (
        <CharactorCardWrapper key={charactor.id} CardData={charactor} />
      ))}
    </div>
  );
};

export default ProfileCardsContainer;
