import React from 'react';
import UserPortrailCardWrapper from '../components/UserPortrailCardWrapper';

const Sidebar = ({ contacts }) => {
  return (
    <aside className="Sidebar">
      {contacts.map((user) => {
        return <UserPortrailCardWrapper user={user} />;
      })}
    </aside>
  );
};

export default Sidebar;
