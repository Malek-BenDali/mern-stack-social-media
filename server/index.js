import express from "express"
import { db, routes } from "./start/index.js"

const app = express()
db(app)
routes(app)
