import './App.css';
import ProfileCardsContainer from './Layout/ProfileCardsContainer';
import CharacterCard from './webComponents/CharacterCard';
import UserPortrail from './webComponents/UserPortrailCard';
import { mockUsersProfile } from './mockData/mockUsersProfile';
import Sidebar from './Layout/SideBar';
import { worker } from './mockAPI/browser';

if (process.env.NODE_ENV === 'development') {
  //mock a api server by using msw
  worker.start();
}
const currentUser = {
  name: 'Howard Crawford',
  img: 'https://randomuser.me/api/portraits/men/41.jpg',
  location: 'Queanbeyan',
  description: 'Designer',
  skills: ['Figma', 'UI/UX', 'Graphic Design', 'Photoshop'],
  id: 9,
  isPro: true,
  following: [1, 2, 4, 6, 7],
  followers: [],
};
function App() {
  return (
    <div className="App">
      <Sidebar currentUser={currentUser} />
      <ProfileCardsContainer />
    </div>
  );
}

export default App;
