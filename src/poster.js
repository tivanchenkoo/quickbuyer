const axios = require("axios").default
const https = require("https")

let API_URL = "https://localhost:34676/create/:"

function createProduct({
	name,
	price,
	seller,
	country,
	type,
	date,
	sorting,
	category,
	img,
}) {
	API_URL = `https://localhost:34676/create/:${name}&:${price}&:${seller}&:${country}&:${type}&:${date}&:${sorting}:${category}&:${img}`
	console.log(API_URL)
	return API_URL
}
const agent = new https.Agent({
	rejectUnauthorized: false
})
axios
	.post(
		createProduct({
			name: "Iphone",
			price: "1000$",
			seller: "Walter White",
			country: "UK",
			type: "technic",
			date: "05.03.2024",
			sorting: "idk",
			category: "phones",
			img: null,
		}),
		{
			name: "Iphone",
			price : "1000$",
			seller : "Walter White",
			country : "UK",
			type : "technic",
			date : "05.03.2024",
			sorting : "idk",
			category : "phones",
			img : null		},
		{ httpsAgent: agent }
	)
	.then((resp) => console.log(resp))
	.catch((err) => console.log(err.message))

// axios
// 	.get(API_URL, {
// 		httpsAgent: agent,
// 	})
// 	.then((response) => {
// 		console.log(response.data)
// 	})
// 	.catch((error) => {
// 		console.error("There was a problem with your axios request:", error)
// 	})
