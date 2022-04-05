import posts from "../routes/posts.js"
import bodyParser from "body-parser"
import cors from "cors"

const routes = app => {
	app.use(bodyParser.json({ limit: "30mb", extended: true }))
	app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
	app.use(cors())
	app.use("/post", posts)
}

export default routes
