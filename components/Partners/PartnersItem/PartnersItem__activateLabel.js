import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class PartnersItem__activateLabel extends Component {
	render() {
		return (
			<View style={{
				position: 'absolute',
				bottom: 15,
				right: 15,
			}}>
				<Text style={{
					fontSize: 15
				}}
				>Активировано</Text>
			</View>
		)
	}
}
