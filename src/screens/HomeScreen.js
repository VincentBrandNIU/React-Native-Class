import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>Home Screen</Text>
			<Button title="Go to Components Demo" onPress={() => navigation.navigate('Components')} />
			<Button title="Go to List Demo" onPress={() => navigation.navigate('List')} />
			<Button title="Go to Image Demo" onPress={() => navigation.navigate('ImageScreen')} />
			<Button title="Go to Counter Demo" onPress={() => navigation.navigate('Count')} />
			<Button title="Go to Color Demo" onPress={() => navigation.navigate('Color')} />
			<Button title="Go to Square Demo" onPress={() => navigation.navigate('Square')} />
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;
