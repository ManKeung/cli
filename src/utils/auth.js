import Cookies from 'js-cookie'

const TOKENKEY = 'comment-token'

export function getToken (json = false) {
  if (json) {
    return Cookies.getJSON(TOKENKEY)
  }

  return Cookies.get(TOKENKEY)
}

export function setToken (token) {
  return Cookies.set(TOKENKEY, token)
}

export function removeToken () {
  return Cookies.remove(TOKENKEY)
}
