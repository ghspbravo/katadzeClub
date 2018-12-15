import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import Styles from '../../constants/Styles';
import Partners__item from './PartnersItem';

export default class Partners extends Component {
	render() {
		return (
			<ScrollView style={Styles.containerInner_titled}>
				<Partners__item
					openPartnerHandler={this.props.openPartnerHandler}
					isActivated={true}
				/>
				{[...Array(4)].map((prop, index) => <Partners__item
					key={index}
					openPartnerHandler={this.props.openPartnerHandler}
				/>)}
			</ScrollView>
		)
	}
}
