import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import Styles from '../../constants/Styles';

export default class MemberCard extends Component {
	render() {
		return (
			<View style={[Styles.membershipCard,
			{
				backgroundColor: '#FFC700',
				borderWidth: 2,
				borderColor: 'black'
			}
			]}>
				<Image
					source={require('./brand.png')}
					style={{
						width: 250,
						height: 80,
						resizeMode: 'contain',
						marginTop: 20,
					}}
				/>
				<Text
					style={[Styles.text, Styles.membershipCard__statusLabel]}
				>Член клуба</Text>
				<Text
					style={[Styles.text, Styles.membershipCard__expireDate]}
				>Действительно до: 01.01.2020</Text>
			</View>
		)
	}
}
