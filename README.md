# Demo app of socket.io Namespaces (channels)

  - cd into "app" folder
  - run "npm install"
  - run "node app.js"
  - Open your browser at "http://localhost:3000"
  - Use postman to send messages

## Code
Look in app/public and in the app/app.js file.

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

### Examples of messages received

#### Index page
![index page](/images/choose.png)

#### All
![all page](/images/all.png)

#### Channel1
![channel1 page](/images/channel1.png)

#### Both channel1 and channel2
![both channels](/images/both.png)

### Oh my DOCKER!!
  1. docker build -t namespace
  2. docker run --name namespace -d -p 3000:3000 namespace
  3. voilà
