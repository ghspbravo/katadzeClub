import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Styles from '../../constants/Styles';

export default class LoginForm__Input extends Component {
	_fieldValueChangeHandler = (value) => {
		this.props.inputValueChangeHandler(this.props.name, value)
	}

	render() {
		return (
			<View style={{ marginBottom: 20 }}>
				<Text style={Styles.inputLabel}
				>{this.props.label}</Text>
				<TextInput
					placeholder={this.props.placeholder}
					placeholderTextColor='white'
					onSubmitEditing={this.props.formSubmitHandler}
					onChangeText={this._fieldValueChangeHandler}
					value={this.props.value}
					style={Styles.inputField}
					autoCapitalize='none'
				/>
			</View>
		)
	}
}
