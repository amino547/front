import React, { createContext, useState } from 'react';

export const PackageContext = createContext();

export const PackageProvider = ({ children }) => {
  const [packages, setPackages] = useState([]);

  const addPackage = (newPackage) => {
    setPackages([...packages, { ...newPackage, id: packages.length + 1 }]);
  };

  const editPackage = (updatedPackage) => {
    setPackages(packages.map(pkg => pkg.id === updatedPackage.id ? updatedPackage : pkg));
  };

  const deletePackage = (id) => {
    setPackages(packages.filter(pkg => pkg.id !== id));
  };

  return (
    <PackageContext.Provider value={{ packages, addPackage, editPackage, deletePackage }}>
      {children}
    </PackageContext.Provider>
  );
};