import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from '../components/customButton';

const HapusNote = ({ setCurrentPage, hapusNote, currentEditNoteId }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Hapus Note</Text>
      <Text>Apakah Anda yakin ingin menghapus note ini?</Text>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#D82148"
          color="white"
          text="Hapus"
          width="100%"
          onPress={() => {
            hapusNote(currentEditNoteId);
          }}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Batal"
          width="100%"
          onPress={() => setCurrentPage('home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#203239',
  },
  spacerTop: {
    marginTop: 30,
  },
});

export default HapusNote;
