import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import Styles from '../../../constants/Styles';
import Partners__discountAmount from './PartnersItem__discountAmount';
import PartnersItem__activateLabel from './PartnersItem__activateLabel';

export default class Partners__item extends Component {
	_handlePartnerCardPress = () => {
		this.props.openPartnerHandler()
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={this._handlePartnerCardPress}>
				<View style={Styles.partnersItemCard}>
					<View style={{
						flex: 1,
					}}>
						<Text style={{
							fontSize: 36,
						}}
						>Солнечная</Text>
						<Text style={{
							fontSize: 12,
						}}
						>Скидка на ски-пасс</Text>
					</View>
					<View style={{
						flex: 2,
						alignSelf: 'center',
						justifyContent: 'center',
					}}>
						<Partners__discountAmount
							amount='15%'
						/>
					</View>
					{this.props.isActivated
						? <PartnersItem__activateLabel />
						: null
					}
				</View>
			</TouchableWithoutFeedback>
		)
	}
}
