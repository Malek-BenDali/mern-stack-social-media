import * as actionType from "../actions/TYPES"

export default (posts = [], action) => {
	switch (action.type) {
		case actionType.FETCH_ALL_POSTS:
			return posts
		case actionType.CREATE_POST:
			return posts
		default:
			return posts
	}
}
