import './App.css';
import ProfileCardsContainer from './Layout/ProfileCardsContainer';
import CharacterCard from './webComponents/CharacterCard';
import UserPortrail from './webComponents/UserPortrailCard';
import { mockUsersProfile } from './mockData/mockUsersProfile';
import Sidebar from './Layout/SideBar';

function App() {
  return (
    <div className="App">
      <Sidebar contacts={mockUsersProfile} />
      <ProfileCardsContainer contacts={mockUsersProfile} />
    </div>
  );
}

export default App;
