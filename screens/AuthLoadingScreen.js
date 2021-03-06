import React, { Component } from 'react'
import {
	ActivityIndicator,
	AsyncStorage,
	StatusBar,
	View,
} from 'react-native';
import Styles from '../constants/Styles';

export default class AuthLoadingScreen extends Component {
	constructor(props) {
		super(props);
		this._bootstrapAsync();

		this.state = {

		}
	}

	// Fetch the token from storage then navigate to our appropriate place
	_bootstrapAsync = async () => {
		const userToken = await AsyncStorage.getItem('userToken');

		// This will switch to the App screen or Auth screen and this loading
		// screen will be unmounted and thrown away.
		this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
	};

	// Render any loading content that you like here
	render() {
		return (
			<View style={Styles.container}>
				<ActivityIndicator />
			</View>
		);
	}
}