import React, { createContext, useReducer, ReactNode } from 'react';

type Item = {
  id: number;
  text: string;
};

type State = {
  items: Item[];
};

type Action =
  | { type: 'ADD_ITEM'; payload: string }
  | { type: 'EDIT_ITEM'; payload: { id: number; text: string } }
  | { type: 'DELETE_ITEM'; payload: number };

const initialState: State = {
  items: [],
};

const itemReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { items: [...state.items, { id: Date.now(), text: action.payload }] };
    case 'EDIT_ITEM':
      return {
        items: state.items.map((item) =>
          item.id === action.payload.id ? { ...item, text: action.payload.text } : item
        ),
      };
    case 'DELETE_ITEM':
      return { items: state.items.filter((item) => item.id !== action.payload) };
    default:
      return state;
  }
};

export const ItemContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(
  undefined
);

export const ItemProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(itemReducer, initialState);

  return <ItemContext.Provider value={{ state, dispatch }}>{children}</ItemContext.Provider>;
};
