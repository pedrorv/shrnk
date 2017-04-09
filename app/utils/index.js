import uid from 'uid'

export const generateID = (length) => {
  let id = uid(length).split('').map(char => (Math.floor(Math.random() * 2)) ? char.toUpperCase() : char)

  return id.join('')
}

export const formatLink = (link) => {
  if (link.indexOf('http://') === -1 || link.indexOf('https://') === -1) return 'http://' + link

  return link
}

export const redirectTo = (url) => {
  return window.location.href = url
}

// http://stackoverflow.com/questions/1701898/how-to-detect-whether-a-string-is-in-url-format-using-javascript
// Function for testing if some text is a url with javascript from stackoverflow users algorhythm and zhailulu

const IsURL = (url) => {

    var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
        + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@
        + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
        + "|" // 允许IP和DOMAIN（域名）
        + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
        + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
        + "[a-z]{2,6})" // first level domain- .com or .museum
        + "(:[0-9]{1,4})?" // 端口- :80
        + "((/?)|" // a slash isn't required if there is no file name
        + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$"
     var re = new RegExp(strRegex)
     
     return re.test(url)
 }

// https://github.com/segmentio/is-url
// Function for testing if url is valid

const isValid = (url) => {

    var matcher = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/
    
    return matcher.test(url)
 }

 export const isLinkValid = (link) => {
   return IsURL(link.toLowerCase()) ? isValid(formatLink(link.toLowerCase())) : false
 }