import React, { useState, useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
	switch (action.type) {
		case 'increase':
			return { ...state, count: state.count + action.payload };
		case 'decrease':
			return { ...state, count: state.count - action.payload };
		default:
			return state;
	}
};
const INCRIMENT = 1;

const CounterScreen = () => {
	//State that will be updated, we have to use the function setCounter to update the state
	//const [counter, setCounter] = useState(0);
	const [state, dispatch] = useReducer(reducer, { count: 0 });
	const { count } = state;
	return (
		<View>
			<Button
				title="Increase"
				onPress={() => {
					dispatch({ type: 'increase', payload: INCRIMENT });
				}}
			/>
			<Button
				title="Decrease"
				onPress={() => {
					dispatch({ type: 'decrease', payload: INCRIMENT });
				}}
			/>
			<Text>Current Count: {count}</Text>
		</View>
	);
};

const style = StyleSheet.create({});

export default CounterScreen;
