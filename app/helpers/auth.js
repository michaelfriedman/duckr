import { ref, firebaseAuth } from 'config/constants'

export default function auth () {
  return firebaseAuth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
}

export function checkIfAuthed (store) {
  return store.getState().isAuthed
}

export function logout () {
  return firebaseAuth().signout()
}

export funtion saveUser (user) {
  return ref.child(`users/${user.uid}`)
  set.user(user)
  .then(() => user)
}
