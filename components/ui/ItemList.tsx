import React, { useContext, useState } from 'react';
import { FlatList, View, TextInput, StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { ItemContext } from '@/components/ui/ItemContext';

const ItemList: React.FC = () => {
  const context = useContext(ItemContext);
  if (!context) throw new Error('ItemContext must be used within an ItemProvider');

  const { state, dispatch } = context;
  const [text, setText] = useState('');
  const [editingItem, setEditingItem] = useState<number | null>(null);

  const handleAddOrEdit = () => {
    if (editingItem !== null) {
      dispatch({ type: 'EDIT_ITEM', payload: { id: editingItem, text } });
      setEditingItem(null);
    } else {
      dispatch({ type: 'ADD_ITEM', payload: text });
    }
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Enter an item"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleAddOrEdit}>
        {editingItem !== null ? 'Update Item' : 'Add Item'}
      </Button>

      <FlatList
        data={state.items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text>{item.text}</Text>
            </Card.Content>
            <Card.Actions>
            <Button onPress={() => { setEditingItem(item.id); setText(item.text); }}>Edit</Button>
              <Button onPress={() => dispatch({ type: 'DELETE_ITEM', payload: item.id })} color="red">
                Delete
              </Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "black"
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    color: "#f2f2f2",
    marginBottom: 10,
    borderRadius: 5,
  },
  card: {
    marginVertical: 5,
  },
});

export default ItemList;
