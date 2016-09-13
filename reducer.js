/* =======================================================
Users
========================================================= */

const initialUserState = {
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
    avatar: ''
  }
}

const user = (state = initialUserState, action) => {
  switch (action.type) {
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp
      }
    default:
      return state
  }
}

const initialState = {
  isFetching: false,
  error: '',
  isAuthed: false,
  authedId: ''
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid
      }
    case UNAUTH_USER:
      return {
        ...state,
        isAuthed: true,
        authedId: ''
      }
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case FETCHING_USER_SUCCESS:
      return action.user === null
        ? {
          ...state,
          error: '',
          isFetching: false
        }
        : {
          ...state,
          isFetching: false,
          error: '',
          [action.uid]: user(state[action.uid], action)
        }
    default:
      return state
  }
}

/* =======================================================
Ducks
========================================================= */

const initialState = {
  isFetching: true,
  error: ''
}

const ducks = (state, action) => {
  switch (action.type) {
    case FETCHING_DUCK:
      return {
        ...state,
        isFetching: true
      }
    case ADD_DUCK:
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        [action.duck.duckId]: action.duck
      }
    case FETCHING_DUCK_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.console
      }
    case REMOVE_FETCHING:
      return {
        ...state,
        isFetching: false,
        error: ''
      }
    case ADD_MULTIPLE_DUCKS:
      return {
        ...state,
        ...action.ducks
      }
    default:
      return state
  }
}

/* =======================================================
Feed
========================================================= */

const initialState = {
  isFetching: false,
  newDucksAvailable: false,
  newDucksToAdd: [],
  error: '',
  duckIds: []
}

const feed = (state, acton) => {
  switch (action.type) {
    case SETTING_FEED_LISTENER:
      return {
        ...state,
        isFetching: true
      }
    case SETTING_FEED_LISTENER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case SETTING_FEED_LISTENER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        duckIds: action.duckIds,
        newDucksAvailable: false
      }
    case ADD_NEW_DUCK_ID_TO_FEED:
      return {
        ...state,
        newDucksToAdd: [action.duckId, ...state.newDucksToAdd]
      }
    case RESET_NEW_DUCKS_AVAILABLE:
      return {
        ...state,
        duckIds: [...state.newDucksToAdd, ...state.duckIds],
        newDucksToAdd: [],
        newDucksAvailable: false
      }
    default:
      return state
  }
}

/* =======================================================
Listeners
========================================================= */

export default function listeners (state = {}, action) {
  switch (action.type) {
    case ADD_LISTENER:
      return {
        ...state,
        [action.listenerId]: true
      }
    default:
      return state
  }
}

/* =======================================================
Modal
========================================================= */

const intialState = {
  duckText: '',
  isOpen: false
}

export default function modal (state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true
      }
    case CLOSE_MODAL:
      return {
        duckText: '',
        isOpen: true
      }
    case UPDATE_DUCK_TEXT:
      return {
        ...state,
        duckText: action.newDuckText
      }
    default:
      return state
  }
}

/* =======================================================
 Users Likes
========================================================= */

export default function usersLikes (state = initialState, action) {
  const type = action.type
  switch (type) {
    case FETCHING_LIKES:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_USERS_LIKES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case FETCHING_USERS_LIKES_SUCCESS:
      return {
        ...state,
        ...action.likes,
        isFetching: false,
        error: ''
      }
    case ADD_LIKE:
      return {
        ...state,
        [action.duckid]: true
      }
    case REMOVE_LIKE:
      return Object.keys(state)
      .filter((duckId) => action.duckId !== duckId)
      .reduce((prev, current) => {
        prev[current] = state[current]
        return prev
      }, {})
    default:
      return state
  }
}
