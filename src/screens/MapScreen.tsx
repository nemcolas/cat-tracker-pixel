import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    Image,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import MapView, { LatLng, MapPressEvent, Marker } from 'react-native-maps';
import PixelButton from '../components/PixelButton';
import { CatReport, getCats, postCat } from '../services/api';
import { colors, fonts } from '../theme';

export default function MapScreen(): JSX.Element {
  const [catReports, setCatReports] = useState<CatReport[]>([]);
  const [clickedLocation, setClickedLocation] = useState<LatLng | null>(null);
  const [isReportingMode, setIsReportingMode] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [selectedCat, setSelectedCat] = useState<CatReport | null>(null);

  const [imageUri, setImageUri] = useState<string | null>(null);
  const [observation, setObservation] = useState<string>('');

  const fetchCats = async () => {
    try {
      const data = await getCats();
      setCatReports(data);
    } catch (error) {
      console.error('Erro ao buscar gatos:', error);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  const handleMapPress = (event: MapPressEvent) => {
    if (isReportingMode) {
      const coordinate = event.nativeEvent.coordinate;
      setClickedLocation(coordinate);
      setShowReportModal(true);
      setIsReportingMode(false);
    }
  };

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSubmitReport = async () => {
    if (!clickedLocation || !imageUri || !observation.trim()) {
      Alert.alert('Preencha todos os campos!');
      return;
    }

    await postCat({
      imageUri,
      observation,
      latitude: clickedLocation.latitude,
      longitude: clickedLocation.longitude,
    });

    Alert.alert('Gato reportado com sucesso!');
    setShowReportModal(false);
    setImageUri(null);
    setObservation('');
    setClickedLocation(null);
    fetchCats();
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        onPress={handleMapPress}
        initialRegion={{
          latitude: -23.55052,
          longitude: -46.633308,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {catReports.map((cat, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: cat.latitude,
              longitude: cat.longitude,
            }}
            onPress={() => setSelectedCat(cat)}
          />
        ))}
      </MapView>

      {/* Botão pixel art */}
      <TouchableOpacity
        style={styles.reportButton}
        onPress={() => setIsReportingMode(true)}
      >
        <Text style={styles.reportButtonText}>🐱</Text>
      </TouchableOpacity>

      {/* Modal - Reportar gato */}
      <Modal visible={showReportModal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Reportar Gato</Text>

            <PixelButton title="Selecionar Imagem" onPress={handleImagePick} />
            {imageUri && <Image source={{ uri: imageUri }} style={styles.previewImage} />}

            <TextInput
              placeholder="Observações"
              placeholderTextColor={colors.text}
              style={styles.input}
              multiline
              value={observation}
              onChangeText={setObservation}
            />

            <View style={styles.modalActions}>
              <PixelButton title="Cancelar" onPress={() => setShowReportModal(false)} />
              <PixelButton title="Enviar" onPress={handleSubmitReport} />
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal - Detalhes do gato */}
      <Modal visible={!!selectedCat} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Gato Avistado</Text>

            {selectedCat?.imageUri && (
              <Image source={{ uri: selectedCat.imageUri }} style={styles.previewImage} />
            )}

            <Text style={styles.label}>Observação:</Text>
            <Text style={styles.infoText}>{selectedCat?.observation}</Text>

            <PixelButton title="Fechar" onPress={() => setSelectedCat(null)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  map: { flex: 1 },
  reportButton: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 30,
    elevation: 4,
    borderWidth: 3,
    borderColor: colors.border,
  },
  reportButtonText: {
    fontSize: 24,
    color: colors.white,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    backgroundColor: colors.background,
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  modalTitle: {
    fontSize: 14,
    fontFamily: fonts.pixel,
    color: colors.text,
    marginBottom: 12,
  },
  input: {
    borderWidth: 3,
    borderColor: colors.border,
    borderRadius: 6,
    padding: 10,
    marginTop: 12,
    minHeight: 80,
    color: colors.text,
    fontFamily: fonts.pixel,
    fontSize: 10,
  },
  modalActions: {
    marginTop: 20,
    gap: 10,
  },
  previewImage: {
    width: '100%',
    height: 180,
    marginTop: 10,
    resizeMode: 'cover',
    borderRadius: 6,
  },
  infoText: {
    fontSize: 10,
    fontFamily: fonts.pixel,
    color: colors.white,
    marginTop: 8,
  },
  label: {
    color: colors.warning,
    fontFamily: fonts.pixel,
    fontSize: 10,
    marginTop: 10,
  },
});
