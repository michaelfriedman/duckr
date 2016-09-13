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
    likeCount: {
      [duckId]: 0
    },
    usersDucks: {
      [uid]: {
        isFetching,
        error,
        [uid]: {
          lastUpdated,
          duckIds: [duckId, duckId, duckId]
      }
    },
    usersLikes: {
      duckId: true
    },
    feed: {
      isFetching,
      error,
      newDucksAvailable,
      duckIdsToAddL [duckId, duckId],
      duckIds: [duckId, duckId]
    }
    replies: {
      isFetching,
      error,
      [duckId]: {
        lastUpdated,
        replies: {
          [replyId]: {
            name,
            reply,
            uid,
            timestamp,
            avatar
          }
        }
      }
    },
    listeners: {
      [listenerId]: true
    }
  }
