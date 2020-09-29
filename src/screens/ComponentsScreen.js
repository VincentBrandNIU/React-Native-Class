import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
	const name = 'Vince';
	return (
		<View>
			<Text style={styles.textStyle}>Getting Started with react Native!</Text>
			<Text style={styles.textStyle2}>My Name is {name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 45,
	},
	textStyle2: {
		fontSize: 20,
	},
});

export default ComponentsScreen;
