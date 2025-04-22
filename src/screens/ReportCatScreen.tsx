import { useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { postCat } from '../services/api';
export default function ReportCatScreen(): JSX.Element {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [observation, setObservation] = useState<string>('');

  const route = useRoute();
  const params = route.params as { latitude?: number; longitude?: number } | undefined;

  const latitude = params?.latitude;
  const longitude = params?.longitude;

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    if (!latitude || !longitude) {
      Alert.alert('Erro', 'Você precisa selecionar um local no mapa para reportar um gato.');
      return;
    }

    if (!imageUri || !observation.trim()) {
      Alert.alert('Preencha tudo', 'Selecione uma imagem e escreva uma observação.');
      return;
    }

    await postCat({
      imageUri,
      observation,
      latitude,
      longitude,
    });

    Alert.alert('Sucesso', 'Gato reportado com sucesso!');
    setImageUri(null);
    setObservation('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Foto do Gato</Text>
      <Button title="Selecionar Imagem" onPress={pickImage} />

      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}

      <Text style={styles.label}>Observações</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: perto da padaria, parecia assustado..."
        value={observation}
        onChangeText={setObservation}
        multiline
      />

      <Button title="Reportar Gato" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontWeight: 'bold', marginTop: 20, marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    minHeight: 80,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 15,
    marginBottom: 20,
  },
});
