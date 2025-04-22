import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../theme';

export default function HomeScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Rastreador de Gatos!</Text>

      <Text style={styles.subtitle}>
        Vá até “Mapa” → toque no botão 🐱 → selecione a foto → descreva onde o gato foi visto.
      </Text>

      <Image
        source={require('../../assets/home-cats.png')}
        style={styles.image}
        resizeMode='contain'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 16,
  },
  title: {
    fontSize: 12,
    color: colors.primary,
    fontFamily: fonts.pixel,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 8,
    color: colors.white,
    fontFamily: fonts.pixel,
    textAlign: 'center',
    paddingHorizontal: 8,
    marginTop: 4,
  },
  image: {
    width: 300,
    height: 300,
  },
});
