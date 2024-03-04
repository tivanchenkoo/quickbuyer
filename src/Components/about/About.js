import { Row, Col, Image } from "react-bootstrap"
// import "C:\Users\User\OneDrive\Рабочий стол\quickbuyer\src\pngImages\GLOBAL\man.png"
function About({ text, imagePath }) {
	return (
		<Row className="about">
			<Col xs={6} className="about__info">
				{text}
			</Col>
			<Col xs={6} className="about__imgblock">
				<Image src={imagePath} />
			</Col>
		</Row>
	)
}

export default About
