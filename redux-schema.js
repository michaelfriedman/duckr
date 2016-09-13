{
  users:
  isAuthed,
  isFetching,
  error,
  authedId,
    [uid]: {
      lastUpdated,
      info: {
        name,
        uid,
        avatar
      }
    }
},
modal: {
  duck,
  isOpen
}
    ducks: {
      isFetching,
      error,
      [duckId]: {
        lastUpdated,
        info: {
          avatar,
          duckId,
          name,
          text,
          timestamp,
          uid
        }
      }
    },
    usersDucks: {
      [uid]: {
        isFetching,
        error,

        lastUpdated,
        duckIds: [duckId, duckId, duckId]
      }
    },
    likeCount: {
      [duckId]: 0
    },
    usersLikes: {
      [duckId]: true
    },
    replies: {
      isFetching,
      error,
      [duckId]: {
        replies: {
          lastUpdated,
          replyId: {
            name,
            commment,
            uid,
            timestamp,
            avatar
          }
        }
      }
    },
    listeners: {
      [listenerId]: true
    },
    feed: {
      isFetching,
      error,
      newDucksAvailable,
      duckIdsToAddL [duckId, duckId],
      duckIds: [duckId, duckId]
    }
}
