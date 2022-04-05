import React from "react"
import Post from "./Post"
import useStyles from "./styles"

function index() {
	const classes = useStyles()
	return (
		<div>
			Posts
			<Post />
		</div>
	)
}

export default index
