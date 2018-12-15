import React, { Component } from 'react'
import { TouchableOpacity, View, Text, Image, Alert } from 'react-native'
import Styles from '../../constants/Styles';

export default class AuthSocialVk extends Component {

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
							source={require('./social_vkontakte.png')}
							style={Styles.socialAuthButtonIcon}
						/>
						<Text style={[Styles.textWhite, Styles.socialAuthButtonText]}>Войти через ВК</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}
