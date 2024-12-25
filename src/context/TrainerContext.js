import React, { createContext, useState } from 'react';

export const TrainerContext = createContext();

export const TrainerProvider = ({ children }) => {
  const [trainers, setTrainers] = useState([]);

  const addTrainer = (newTrainer) => {
    setTrainers([...trainers, { ...newTrainer, id: trainers.length + 1 }]);
  };

  const editTrainer = (updatedTrainer) => {
    setTrainers(trainers.map(trainer => trainer.id === updatedTrainer.id ? updatedTrainer : trainer));
  };

  const deleteTrainer = (id) => {
    setTrainers(trainers.filter(trainer => trainer.id !== id));
  };

  return (
    <TrainerContext.Provider value={{ trainers, addTrainer, editTrainer, deleteTrainer }}>
      {children}
    </TrainerContext.Provider>
  );
};
