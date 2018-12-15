import React, { Component } from 'react'
import { View, AsyncStorage, Text } from 'react-native'
import LoginForm__Input from './LoginForm__Input';
import LoginForm__Input_password from './LoginForm__Input_password';
import Styles from '../../constants/Styles';
import LoginForm__submitButton from './LoginForm__submitButton';

export default class LoginForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: '',
		}
	}

	_fieldValueChangeHandler = (fieldName, value) => {
		this.setState(() => ({
			[fieldName]: value
		}))
	}

	_handleAuth = async () => {
		await AsyncStorage.setItem('accessToken', 'tokenValue');
		this.props.navigateToMain()
	}

	render() {
		return (
			<View style={{ flex: 1, marginTop: 50 }}>
				<LoginForm__Input
					name='username'
					label='Логин:'
					placeholder='Имя пользователя/почта'
					formSubmitHandler={this._handleAuth}
					inputValueChangeHandler={this._fieldValueChangeHandler}
					value={this.state.username}
				/>
				<LoginForm__Input_password
					name='password'
					label='Пароль:'
					formSubmitHandler={this._handleAuth}
					inputValueChangeHandler={this._fieldValueChangeHandler}
					value={this.state.password}
				/>
				<Text style={[Styles.textWhite, {
					fontSize: 12,
					textTransform: 'uppercase',
				}]}>
					{`*  Что требуется?
	1)  Быть студентом
	2)  Всегда брать с собой студенческий`}
				</Text>
				 <LoginForm__submitButton
				 	authHandler={this._handleAuth}
				 />
			</View>
		)
	}
}
