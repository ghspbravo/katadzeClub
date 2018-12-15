import React, { Component } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Colors from '../../constants/Colors';

export default class LoginForm__submitButton extends Component {
	render() {
		return (
			<TouchableOpacity onPress={this.props.authHandler}>
				<View style={{
					padding: 5,
					borderBottomColor: Colors.acsent,
					borderBottomWidth: 2,
					marginTop: 50,
					width: 120,
					alignSelf: 'center'
				}}>
					<Text style={{
						fontSize: 32,
						textTransform: "uppercase",
						color: 'white',
						textAlign: 'center'
					}}>Войти</Text>
				</View>
			</TouchableOpacity>
		)
	}
}
