import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, AsyncStorage} from 'react-native'
import Styles from '../../constants/Styles';

export default class MemberInfo__ExitButton extends Component {
	render() {
		_handleExitPress = () => {
			AsyncStorage.clear()
			this.props.navigateToAuthScreen()
		}

		return (
			<View>
				<TouchableOpacity
				onPress={_handleExitPress}
				style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
					<Text style={[Styles.textLightWhite, {
						fontSize: 18
					}]}>Выйти</Text>
					<Image
						source={require('./exit.png')}
						style={{
							width: 24,
							height: 24,
							marginLeft: 10,
						}}
					/>
				</TouchableOpacity>
			</View>
		)
	}
}
