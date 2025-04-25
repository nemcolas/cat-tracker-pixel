import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../theme';

export default function AboutUsScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>sobre os desenvolvedores</Text>

      {/* Gato do Nic */}
      <View style={styles.devBlock}>
        <Text style={styles.arrow}>gato do nic</Text>
        <View style={styles.row}>
          <Image
            source={require('../../assets/gato-nic.jpg')} // substitua pelo seu gif se quiser
            style={styles.catImage}
          />
          <View style={styles.labelBox}>
            <Text style={styles.label}>nicolas martins</Text>
            <Text style={styles.label}>rm553478</Text>
          </View>
        </View>
      </View>

      {/* Gato da Luana */}
      <View style={styles.devBlock}>
        <Text style={styles.arrow}>gato da luana</Text>
        <View style={styles.row}>
          <Image
            source={require('../../assets/gato-luana.jpg')} // substitua pelo seu gif se quiser
            style={styles.catImage}
          />
          <View style={styles.labelBox}>
            <Text style={styles.label}>luana sousa matos</Text>
            <Text style={styles.label}>rm552621</Text>
          </View>
        </View>
      </View>

      <Text style={styles.footer}>sorriso ronaldo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
    gap: 36,
  },
  title: {
    fontFamily: fonts.pixel,
    fontSize: 10,
    color: colors.primary,
    textAlign: 'center',
  },
  devBlock: {
    width: '100%',
    alignItems: 'flex-start',
    gap: 6,
  },
  arrow: {
    fontFamily: fonts.pixel,
    fontSize: 8,
    color: colors.primary,
    marginLeft: 12,
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  catImage: {
    width: 70,
    height: 70,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: colors.primary,
    resizeMode: 'cover',
  },
  labelBox: {
    borderWidth: 2,
    borderColor: colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: colors.background,
  },
  label: {
    fontFamily: fonts.pixel,
    fontSize: 8,
    color: colors.text,
  },
  footer: {
    position: 'absolute',
    bottom: 8,
    fontFamily: fonts.pixel,
    fontSize: 6,
    color: colors.primary,
    opacity: 0.6,
  },
});
