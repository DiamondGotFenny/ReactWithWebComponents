import { useState, useEffect } from 'react';
import CharactorCardWrapper from '../components/CharactorCardWrapper';
import httpService from '../services/httpService';

const ProfileCardsContainer = () => {
  const baseURL = process.env.REACT_APP_BACKEND_URL;

  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const { data } = await httpService.get(`${baseURL}/api/v1/users`);
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="cards-container">
      {contacts.map((charactor) => (
        <CharactorCardWrapper key={charactor.id} CardData={charactor} />
      ))}
    </div>
  );
};

export default ProfileCardsContainer;
