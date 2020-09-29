import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../Components/ImageDetail';
const ImageScreen = () => {
	return (
		<View>
			<ImageDetail title="Forest" image={require('../../assets/forest.jpg')} score={10} />
			<ImageDetail title="Beach" image={require('../../assets/beach.jpg')} score={1} />
			<ImageDetail title="Mountain" image={require('../../assets/mountain.jpg')} score={2} />
		</View>
	);
};

const styles = StyleSheet.create({});
export default ImageScreen;
