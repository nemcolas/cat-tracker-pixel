import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../theme';

interface Props {
  title: string;
  onPress: () => void;
}

export default function PixelButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    borderWidth: 4,
    borderColor: colors.border,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  text: {
    fontFamily: fonts.pixel,
    fontSize: 10,
    color: colors.border,
    textAlign: 'center',
  },
});
