import React, { createContext, useState } from 'react';

export const MemberContext = createContext();

export const MemberProvider = ({ children }) => {
  const [members, setMembers] = useState([]);

  const addMember = (newMember) => {
    setMembers([...members, { ...newMember, id: members.length + 1 }]);
  };

  const editMember = (updatedMember) => {
    setMembers(members.map(member => member.id === updatedMember.id ? updatedMember : member));
  };

  const deleteMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
  };

  return (
    <MemberContext.Provider value={{ members, addMember, editMember, deleteMember }}>
      {children}
    </MemberContext.Provider>
  );
};