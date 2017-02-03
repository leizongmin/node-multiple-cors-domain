# multiple-cors-domain
Connect middleware that allow multiple CORS domain

## Installation

```bash
$ npm install multiple-cors-domain --save
```

## Usage

```javascript
const multipleCORSDomain = require('multiple-cors-domain');

// allow any domain
app.use(multipleCORSDomain({ any: true }));

// allow a list of domains
app.use(multipleCORSDomain({ domain: [ 'a.com', 'b.com', 'c.com:3000' ] }));

// other options
app.use(multipleCORSDomain({
  any: true,
  // set additional headers
  headers: {
    'Header-A': '12345',
    'Header-B': 'Hello',
  },
  // Access-Control-Allow-Credentials: true
  credentials: true,
  // Access-Control-Max-Age
  maxAge: 3600,
  // Access-Control-Allow-Headers: Header-A, Header-B
  allowHeaders: [ 'Header-A', 'Header-B' ],
  // Access-Control-Allow-Methods: DELETE
  allowMethods: [ 'DELETE' ],
}));
```


## License

```
MIT License

Copyright (c) 2017 Zongmin Lei <leizongmin@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
