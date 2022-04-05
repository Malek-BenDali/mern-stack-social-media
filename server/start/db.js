import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const db = app => {
	const PORT = process.env.PORT || 5000
	mongoose
		.connect(process.env.URL_CONNECTION)
		.then(() =>
			app.listen(PORT, () => console.log(`server listening on port: ${PORT}`))
		)
		.catch(err => console.log("db erro", err.message))
}
export default db
