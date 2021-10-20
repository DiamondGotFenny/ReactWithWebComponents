import { mockUsersProfile } from '../mockData/mockUsersProfile';
import CharactorCardWrapper from '../components/CharactorCardWrapper';

const ProfileCardsContainer = () => {
  return (
    <div className="cards-container">
      {mockUsersProfile.map((charactor) => (
        <CharactorCardWrapper key={charactor.id} CardData={charactor} />
      ))}
    </div>
  );
};

export default ProfileCardsContainer;
