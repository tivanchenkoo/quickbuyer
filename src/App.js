import About from "./Components/about/About.js"
import { useState } from "react"
import "./reset.css"
import { Col, Container, Row, Breadcrumb, Image } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.scss"
import Buttons from "./Components/navbar/Buttons.js"
import Header from "./Components/header/Header.js"
import "./Loader.scss"
import BurgerPanel from "./Components/navbar/burger/burgerpanel/BurgerPanel.js"
import Burger from "./Components/navbar/burger/Burger.js"

function App() {
	const [theme, setTheme] = useState("light")
	const [headerInputVal, setHeaderInput] = useState("")
	const [isLoading, setLoading] = useState(false)
	const swithTheme = () => {
		setTheme((cur) => (cur === "light" ? "dark" : "light"))
		setLoading(true)
		setTimeout(() => setLoading(false), 500)
	}
	const search = (event) => {
		setHeaderInput(event.target.value)
	}
	return !isLoading ? (
		<div className="App" id={theme}>
			<Container fluid>
				<header className="header">
					<Row className="navpanelll">
						<Col xs={0} sm={2}></Col>
						<Col xs={0} sm={2}></Col>
						<Col xs={0} sm={2}></Col>
						<Col className="ml-auto mr-0 header__buttons" xs={12} sm={6}>
							<Buttons
								headerInputVal={headerInputVal}
								search={search}
								switchTheme={swithTheme} // Была исправлена опечатка: switchTheme вместо swithTheme
							/>
						</Col>
					</Row>
					<Row>
						<Header />
					</Row>
				</header>
			</Container>
			<Burger switchTheme={swithTheme} />
			<About
				text='   "Quick Buyer" – это ваш виртуальный торговый партнер, обещающий удивить вас разнообразием и качеством ассортимента. От модных трендов до технологических новинок, у нас есть все, что вам нужно. Наш интерфейс интуитивно понятен, а процесс оформления заказа максимально удобен.
   Мы поощряем лояльность, предоставляя постоянным клиентам уникальные бонусы и специальные предложения. "Quick Buyer" - это не просто магазин, это сообщество любителей умных и быстрых покупок. Присоединяйтесь к нам, чтобы насладиться преимуществами современных онлайн-покупок'
				imagePath={
					"C:/Users/User/OneDrive/Рабочий стол/quickbuyer/src/png/Images/GLOBAL/man.png"
				}
			/>
		</div>
	) : (
		<div className="App App__loader" id={theme}>
			<div className="loader"></div>
		</div>
	)
}

export default App
