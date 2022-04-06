import React from "react"
import Post from "./Post"
import styles from "./styles"

function index() {
	const classes = styles()
	return (
		<div>
			Posts
			<Post />
		</div>
	)
}

export default index
