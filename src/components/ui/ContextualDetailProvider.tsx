// src/components/ui/ContextualDetailProvider.tsx
import React, { createContext, useContext, useState } from 'react';

type ContextualDetail = {
  term: string;
  shortDescription: string;
  longDescription: string;
};

type ContextualDetailContextType = {
  details: ContextualDetail[];
  addDetail: (detail: ContextualDetail) => void;
};

const ContextualDetailContext = createContext<ContextualDetailContextType>({
  details: [],
  addDetail: () => {},
});

export function ContextualDetailProvider({ children }: { children: React.ReactNode }) {
  const [details, setDetails] = useState<ContextualDetail[]>([]);

  const addDetail = (detail: ContextualDetail) => {
    setDetails(prev => [...prev, detail]);
  };

  return (
    <ContextualDetailContext.Provider value={{ details, addDetail }}>
      {children}
    </ContextualDetailContext.Provider>
  );
}

export function useContextualDetail() {
  return useContext(ContextualDetailContext);
}