import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Styles from '../../../constants/Styles';
import Colors from '../../../constants/Colors';

export default class Partners__discountAmount extends Component {
	render() {
		return (
			<View style={{
				width: 130,
				height: 130,
				borderRadius: 75,
				backgroundColor: Colors.background,
				alignItems: 'center',
				justifyContent: 'center'
			}}>
				<Text
					style={Styles.discountAmount}
				>{this.props.amount}</Text>
			</View>
		)
	}
}
