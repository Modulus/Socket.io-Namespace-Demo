# Demo app of socket.io Namespaces (channels)

To start run "npm install"
Then "node app.js"

Use postman to post messages
Results will be seen in the html served by node express.

## Post messages to routes
These post routes in the socket.io app will emit messages to files in the "/public" folder
  - all (default socketio namespace)
    - localhost:3000/all
  -  channel1
     - localhost:3000/channel1
  -  channel2
     - localhost:3000/channel2
  - Both channel1 and channel2
    - localhost:3000/both
