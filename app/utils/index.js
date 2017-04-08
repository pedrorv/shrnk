import uid from 'uid'

export const generateID = (length) => {
  let id = uid(length).split('').map(char => (Math.floor(Math.random() * 2)) ? char.toUpperCase() : char)

  return id.join('')
}

export const redirectTo = (url) => {
  if (url.indexOf('http://') === -1 || url.indexOf('https://') === -1) {
    return window.location.href = 'http://' + url
  } 

  return window.location.href = url
}