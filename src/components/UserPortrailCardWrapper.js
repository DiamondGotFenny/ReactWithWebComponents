import { useRef, useState, useEffect } from 'react';

const UserPortrailCardWrapper = ({ user }) => {
  const userPortraitCard = useRef(null);
  const handleSelectedUser = (user_id) => {
    console.log(user_id);
  };

  useEffect(() => {
    userPortraitCard.current.cardValues = user;
    userPortraitCard.current.populateCard();

    return () => {};
  }, [user]);
  return <user-portrail ref={userPortraitCard}></user-portrail>;
};

export default UserPortrailCardWrapper;
