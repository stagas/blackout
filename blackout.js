/*
 * blackout express middleware
 */

module.exports = function (message, style) {
  message = message || [
    '<div id="container">'
  , '<h1>CENSORED</h1>'
  , '<p>This blackout is a protest against the<br>Stop Online Piracy Act (SOPA) and PROTECT IP Act (PIPA) two bills that, if passed, would seriously damage the free and open Internet.</p>'
  , '<p><a href="http://americancensorship.org/">americancensorship.org</a></p>'
  , '<iframe src="http://player.vimeo.com/video/31100268?byline=0&amp;portrait=0" width="600" height="338" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
  , '</div>'
  ].join('\n')
  style = style || '\
@import url(http://fonts.googleapis.com/css?family=Crete+Round|Bevan);\
body {\
font-family:Crete Round, serif;\
background:#000000;\
color:#f4f4f4;\
}\
#container {\
margin:0 auto;\
width:700px;\
text-align:center;\
}\
h1 {\
font-family:Bevan, serif;\
font-size:72px;\
font-weight:normal;\
margin:60px 0 46px 0;\
line-height:0.5em;\
color:red;\
}\
p {\
margin:20px 0;\
padding:0;\
font-size:26px;\
line-height:42px;\
}\
a {\
color:red;\
font-weight:normal;\
letter-spacing:4px;\
}\
a:hover {\
text-decoration:underline;\
}\
'
  return function (req, res, next) {
    if (req.url !== '/robots.txt') {
      res.writeHead(503, { 'content-type': 'text/html' })
      res.end([
        '<html><head><style>'
      , style
      , '</style></head><body>'
      , message
      , '</body></html>'
      ].join('\n'))
    } else {
      next()
    }
  }
}
