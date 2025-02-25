import { ItemProvider } from '@/components/ui/ItemContext';
import ItemList from '@/components/ui/ItemList';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

export default function crudScreen() {
  return (
    <ItemProvider>
      <PaperProvider>
        <ItemList />
      </PaperProvider>
    </ItemProvider>
  );
}
