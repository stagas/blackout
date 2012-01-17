# blackout express middleware

```javascript
var express = require('express');
var blackout = require('blackout');

var app = express.createServer();

//
// usage:
// blackout(message, style)
//
app.use(blackout());

app.listen(8080, 'localhost');
```

### public domain
