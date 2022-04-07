import * as api from "../../api"
import * as actionsType from "./TYPES"

export const getPosts = () => async dispatch => {
	try {
		const { data } = await api.fetchPosts()
		console.log(data)
		dispatch({
			type: actionsType.FETCH_ALL_POSTS,
			payload: data,
		})
	} catch (err) {
		console.log(err)
	}
}

export const createPost = post => async dispatch => {
	try {
		const { data } = await api.createPost(post)
		dispatch({
			type: actionsType.CREATE_POST,
			payload: data,
		})
	} catch (err) {
		console.log(err)
	}
}
