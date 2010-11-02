NodeCasts Episode 2
===================

Node.JS screencast Episode 2 - PubSub with Faye

Dependencies
------------

* Node 0.3.0
* npm
* faye
* express

Installation
------------
        - Install node from source (http://nodejs.org/#download)
        - Install npm 
          $ curl http://npmjs.org/install.sh | sh
        - Install express 
          $ npm install express
        - Install faye 
          $ npm install faye

Runnning
--------
        $ node server.js
        Point your browser to http://localhost:8000/client.html
       
        Open your terminal and send messages using curl:
        #JSON
        $ curl -X POST -H "Content-Type:application/json" -d '{"message":"hello nodecasts.org"}' http://localhost:8000/message
        #FORM
        $ curl -X POST -H "Content-Type:application/x-www-form-urlencoded" -d 'message=hello using html form' http://localhost:8000/message
       
Maintainer
----------

* Emerson Macedo (<http://nodecasts.org> / <http://codificando.com/> pt_BR)

License:
--------

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
