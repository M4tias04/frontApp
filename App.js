import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const data = [
  { id: '1', title: 'Saber Atual', sound: require('./assets/audiosteste/Optimus.mp3') },
  { id: '2', title: 'Escola', sound: require('./assets/audiosteste/Monark.mp3')},
  { id: '3', title: 'Matemática', sound: require('./assets/audiosteste/Ye.mp3') },
  { id: '4', title: 'Saber Atual' },
  { id: '5', title: 'Escola' },
  { id: '6', title: 'Matemática' },
  { id: '7', title: 'Saber Atual' },
  { id: '8', title: 'Escola' },
  { id: '9', title: 'Matemática' },
];

export default function App() {

  const [sound, setSound] = useState();

  const playSound = async (soundFile) => {
    // Para o som atual se estiver tocando
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
    }

    // Cria e toca novo som
    const { sound: newSound } = await Audio.Sound.createAsync(soundFile);
    setSound(newSound);
    await newSound.playAsync();
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => item.sound && playSound(item.sound)}> 
      <Text style={styles.buttonText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Ionicons name="menu" size={32} color="black" />
        <Text style={styles.title}>Aprendizado</Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

