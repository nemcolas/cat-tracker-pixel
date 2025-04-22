// ResourcesScreen.tsx
import React from 'react';
import { Image, Linking, StyleSheet, Text, View } from 'react-native';
import PixelButton from '../components/PixelButton';
import { colors, fonts } from '../theme';

export default function ResourcesScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recursos Úteis</Text>

      <Image
        source={require('../../assets/cat-inicial.gif')}
        style={styles.image}
        resizeMode="contain"
      />

<PixelButton
  title="Dicas de cuidados com gatos"
  onPress={() => Linking.openURL('https://petanjo.com/blog/cuidados-com-gatos-lista-de-cuidados-essenciais-que-todo-gato-precisa/')}
/>

<PixelButton
  title="ONGs de resgate animal"
  onPress={() => Linking.openURL('https://www.gatopoles.com.br/adocao.php')}
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
    gap: 16,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: fonts.pixel,
    fontSize: 12,
    color: colors.primary,
    marginBottom: 16,
  },
  image: {
    width: 160,
    height: 160,
  },
});
