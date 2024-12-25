import React, { createContext, useState } from 'react';

export const EquipmentContext = createContext();

export const EquipmentProvider = ({ children }) => {
  const [equipments, setEquipments] = useState([]);

  const addEquipment = (newEquipment) => {
    setEquipments([...equipments, { ...newEquipment, id: equipments.length + 1 }]);
  };

  const editEquipment = (updatedEquipment) => {
    setEquipments(equipments.map(equipment => equipment.id === updatedEquipment.id ? updatedEquipment : equipment));
  };

  const deleteEquipment = (id) => {
    setEquipments(equipments.filter(equipment => equipment.id !== id));
  };

  return (
    <EquipmentContext.Provider value={{ equipments, addEquipment, editEquipment, deleteEquipment }}>
      {children}
    </EquipmentContext.Provider>
  );
};