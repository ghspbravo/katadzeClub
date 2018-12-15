import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import Styles from '../../constants/Styles';
import PartnerDiscount from './PartnerDiscount';

export default class PartnerDescription extends Component {
	render() {
		return (
			<ScrollView>
				<View style={{
					backgroundColor: 'white',
					padding: 20,
				}}>
					<Text style={Styles.text}>{
	`ГРАФИК РАБОТЫ:
	
	ПН-ПТ:  11:00 – 23:00 
	СБ-ВС + праздники: 10:00 – 24:00`
					}</Text>
					<Text style={[Styles.text, {marginTop: 15}]}>{
`Прокат оборудования закрывается за 2 часа до окончания работы комплекса.
Прием оборудования закрывается за пол часа до окончания работы комплекса.`
					}</Text>
					<PartnerDiscount />
				</View>
			</ScrollView>
		)
	}
}
