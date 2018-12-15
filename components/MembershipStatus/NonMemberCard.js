import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import Styles from '../../constants/Styles';

export default class NonMemberCard extends Component {
	render() {
		return (
			<View style={[Styles.membershipCard,
			{
				borderWidth: 4,
				borderColor: 'white',
			}
			]}>
				<Image
					source={require('./logo.png')}
					style={[Styles.logo, { marginTop: 20 }]}
				/>
				<Text
					style={[Styles.textWhite, Styles.membershipCard__statusLabel]}
				>Подписка не оплачена</Text>
				<Text
					style={[Styles.textWhite, Styles.membershipCard__expireDate]}
				>Истекло 01.01.2020</Text>
			</View>
		)
	}
}
