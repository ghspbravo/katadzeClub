import React, { Component } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import Styles from '../../constants/Styles';

export default class PartnerActivateButton extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isActivated: props.isActivated
		}
	}

	_activatePressHandler = () => {
		if (!this.state.isActivated) this.setState(() => ({
			isActivated: true,
		}))
	}

	render() {
		return (
			<TouchableOpacity onPress={this._activatePressHandler} style={{ flex: 1 }}>
				<View style={{
					alignItems: 'center'
				}}>
					<Text style={[Styles.textWhite, {
						fontSize: 32,
						textTransform: 'uppercase'
					}]}>{this.state.isActivated ? 'Активировано' : 'Активировать'}</Text>
					<View style={{
						width: 190,
						borderColor: this.state.isActivated ? '#EF4141' : '#41BFEF',
						borderWidth: 2,
						marginTop: 5,
					}} />
					{ this.state.isActivated
						? <Text style={[Styles.textWhite, {
							fontSize: 16,
							textAlign: 'center',
							marginTop: 10
						}]}>01.01.2019 в 13:40</Text>
						: null
					}
				</View>
			</TouchableOpacity >
		)
	}
}
