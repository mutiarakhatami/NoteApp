import React from 'react';
import { FlatList, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CustomButton from '../components/customButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const NoteCard = ({ item, setCurrentPage, setCurrentEditNoteId }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text>{item.desc}</Text>
    <View style={styles.buttons}>
      <CustomButton
        backgroundColor="#FFC300"
        color="#151D3B"
        text="Ubah"
        fontSize={12}
        width={100}
        onPress={() => {
          setCurrentEditNoteId(item.id);
          setCurrentPage('edit');
        }}
      />
      <CustomButton
        backgroundColor="#D82148"
        color="#fff"
        text="Hapus"
        fontSize={12}
        width={100}
        onPress={() => {
          setCurrentEditNoteId(item.id);
          setCurrentPage('hapus');
        }}
      />
    </View>
  </View>
);

const Home = ({ noteList, setCurrentPage, setCurrentEditNoteId }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>My Notes</Text>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => setCurrentPage('add')}
      >
        <Icon name="plus" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
    <FlatList
      showsVerticalScrollIndicator={false}
      data={noteList}
      renderItem={({ item }) => (
        <NoteCard item={item} setCurrentPage={setCurrentPage} setCurrentEditNoteId={setCurrentEditNoteId} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: '#DDD',
    borderWidth: 2,
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: '600',
    color: '#203239',
    fontSize: 16,
    marginBottom: 5,
  },
  buttons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#203239',
  },
  iconButton: {
    backgroundColor: '#203239',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
