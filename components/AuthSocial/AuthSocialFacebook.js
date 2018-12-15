import React, { Component } from 'react'
import { TouchableOpacity, View, Text, Image, Alert } from 'react-native'
import Styles from '../../constants/Styles';

export default class AuthSocialFacebook extends Component {

	_socialButtonPressHandler = () => {
		Alert.alert('social button press')
	}

	render() {
		return (
			<TouchableOpacity onPress={this._socialButtonPressHandler}>
				<View style={[Styles.socialAuthButton, {
					backgroundColor: '#41BFEF',
				}]}>
					<View style={Styles.socialAuthButtonInner}>
						<Image
							source={require('./social_facebook.png')}
							style={Styles.socialAuthButtonIcon}
						/>
						<Text style={[Styles.textWhite, Styles.socialAuthButtonText]}>Войти через facebook</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}
