import React, { Component } from 'react'
import { View, Button } from 'react-native'
import MemberCard from './MemberCard';
import NonMemberCard from './NonMemberCard';

export default class MemberInfo extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isMember: false,
		}
	}
	componentDidMount() {
		// fetch here
	}

	_handleSubscribeToggleButtonPressed = () => {
		this.setState(prevState => ({ isMember: !prevState.isMember }))
	}

	render() {
		return (
			<View style={{flex: 1}}>
				{this.state.isMember
					? <MemberCard />
					: <NonMemberCard />
				}
				<Button
					onPress={this._handleSubscribeToggleButtonPressed}
					title="Toggle status"
				/>
			</View>
		)
	}
}
