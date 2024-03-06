import { useState } from "react"
import "./registrationglobal.scss"
import { Button, Col, Container, Row } from "react-bootstrap"
import { useHistory } from 'react-router-dom';

function Registration() {
	const [inputValue, setValue] = useState({ email: "", password: "" })
	const [isEnter, setEnter] = useState(false)
	function register({ email, password }) {
		console.log(`/registration/:${password}&:${email}`)
		window.location.replace(`/registration/:${password}&:${email}`)
	}
	function enter({ email, password }) {
		window.location.replace(`/enter/:${password}&:${email}`)
	}
	return !isEnter ? (
		<Container>
			<Row>
				<Col xs={2}></Col>
				<Col xs={8} className="register">
					<p className="title">Регистрация</p>
					<div className="register__info">
						<h3>Инструкция</h3>
						<p>1. Введите свою почту или номер телефона</p>
						<p>2. Придумайте пароль и подтвердите его</p>
						<p>3. Нажмите кнопку Зарегистрироваться</p>
						<p>
							Так же, если у Вас уже имеется аккаунт, то введите почту и пароль
							от аккаунта и нажмите Войти
						</p>
						<p>Просим ознакомиться с нашими Условиями пользования сайтом</p>
					</div>
					<form
						onSubmit={(e) => {
							e.preventDefault()
							register(inputValue)
						}}
						className="register__inputs"
					>
						<label>
							Почта{" "}
							<input
								value={inputValue.email}
								onChange={(e) =>
									setValue({ ...inputValue, email: e.target.value })
								}
								type="email"
								required
							/>
						</label>
						<label>
							Пароль
							<input
								type="password"
								value={inputValue.password}
								onChange={(e) =>
									setValue({ ...inputValue, password: e.target.value })
								}
								required
							/>
						</label>
						<label>
							Подтвердите пароль
							<input type="password" />
						</label>
						<input type="submit" value={"Зарегистрироваться"} />

						<p>
							Уже есть аккаунт?{" "}
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault()
									setEnter(true)
								}}
							>
								Войти
							</a>
						</p>
					</form>
				</Col>
				<Col xs={2}> </Col>
			</Row>
		</Container>
	) : (
		<Container>
			<Row>
				<Col xs={2}></Col>
				<Col xs={8} className="register">
					<p className="title">Вход</p>
					<div className="register__info">
						<h3>Инструкция</h3>
						<p>1. Введите свою почту или номер телефона</p>
						<p>2. Введите пароль</p>
						<p>3. Нажмите кнопку Зарегистрироваться</p>
						<p>
							Так же, если у Вас уже имеется аккаунт, то введите почту и пароль
							от аккаунта и нажмите Войти
						</p>
						<p>Просим ознакомиться с нашими Условиями пользования сайтом</p>
					</div>
					<form className="register__inputs">
						<label>
							Почта{" "}
							<input
								value={inputValue.email}
								onChange={(e) =>
									setValue({ ...inputValue, email: e.target.value })
								}
								type="email"
							/>
						</label>
						<label>
							Пароль
							<input
								type="password"
								value={inputValue.password}
								onChange={(e) =>
									setValue({ ...inputValue, password: e.target.value })
								}
							/>
						</label>
						<label>
							Подтвердите пароль
							<input type="password" />
						</label>
					</form>
					<p>
						Нету аккаунта?{" "}
						<a
							href="#"
							onClick={(e) => {
								e.preventDefault()
								setEnter(false)
							}}
						>
							Создать аккаунт
						</a>
					</p>
				</Col>
				<Col xs={2}> </Col>
			</Row>
		</Container>
	)
}

export default Registration
