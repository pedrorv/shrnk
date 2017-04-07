import uid from 'uid'

export const generateID = (length) => {
  let id = uid(length).split('').map(char => (Math.floor(Math.random() * 2)) ? char.toUpperCase() : char)

  return id.join('')
}