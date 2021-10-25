import React from 'react';
import { useState, useEffect } from 'react';
import httpService from '../services/httpService';
import UserPortrailCardWrapper from '../components/UserPortrailCardWrapper';

const Sidebar = ({ currentUser }) => {
  const baseURL = process.env.REACT_APP_BACKEND_URL;

  const [followingList, setFollowingList] = useState([]);

  const fetchContacts = async () => {
    try {
      const { data } = await httpService.get(
        `${baseURL}/api/v1/users?currentUserId=${currentUser.id}`
      );
      console.log(data, 'following list');
      setFollowingList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <aside className="Sidebar">
      {followingList.map((user) => {
        return <UserPortrailCardWrapper key={user.id} user={user} />;
      })}
    </aside>
  );
};

export default Sidebar;
