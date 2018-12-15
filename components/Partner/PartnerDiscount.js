import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Styles from '../../constants/Styles';

export default class PartnerDiscount extends Component {
	render() {
		return (
			<View style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}>
				<Text style={[Styles.text, {
					fontSize: 64,
					flex: 4,
					color: '#41BFEF'
				}]}>15%</Text>
				<Text style={[Styles.text, {
					fontSize: 24,
					flex: 6
				}]}>скидка на ски-пасс</Text>
			</View>
		)
	}
}
