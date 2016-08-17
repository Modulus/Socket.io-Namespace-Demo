# Demo app of socket.io Namespaces (channels)

  - cd into "app" folder
  - run "npm install"
  - run "node app.js"
  - Open your browser at "http://localhost:3000"
  - Use postman to send messages

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

## Where can I find postman?
  - You can find postman here: [Postman](https://www.getpostman.com/)
  - What is postman?
    - It is an application to send messages to a rest API, like this node app

### Example of postman posting  /channel1
![Postman image](/images/postman.png)

### Example of messages
  - Index page
![index.html](/images/choose.png)
  - All
![all.html](/images/all.png)
  - channel1
![channel1](/images/channel1.png)
  - both channel1 and channel2
![both channels](/images/both.png)
