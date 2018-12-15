import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import Styles from '../../constants/Styles';
import MemberInfo__ExitButton from './MemberInfo__ExitButton';
import MemberInfo__Avatar from './MemberInfo__Avatar';


export default class MemberInfo extends Component {
	componentDidMount() {
		// fetch here
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Text
						style={[Styles.textLightWhite, {
							flex: 1,
							fontSize: 20,
							textTransform: 'uppercase'
						}]}
					>Петр Петров</Text>
					<MemberInfo__Avatar />
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
					<Text style={[Styles.textLightWhite, { flex: 1 }]}>ID: 257843</Text>
					<MemberInfo__ExitButton
						navigateToAuthScreen={this.props.navigateToAuthScreen}
					/>
				</View>
			</View>
		)
	}
}
