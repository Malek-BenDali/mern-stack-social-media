import * as actionType from "../actions/TYPES"

export default (posts = [], action) => {
	switch (action.type) {
		case actionType.FETCH_ALL_POSTS:
			return action.payload
		case actionType.CREATE_POST:
			return [...posts, action.payload]
		default:
			return posts
	}
}
