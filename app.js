const express = require("express");
const { execFile } = require("child_process");

const http = require("http");
const socketIO = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

var websocket;
app.post("/webSocket:id", function (req, res) {
  console.log(req.params);
  var id = req.params.id;
  if (id == "Start") {
    websocket = execFile(
      "ros2",
      ["launch", "rosbridge_server", "rosbridge_websocket_launch.py"],
      function (err, stdout, stderr) {
        if (err) {
          console.log(err);
        }
      }
    );
    console.log("Websocket started");
    res.send("Connected");
  } else if (id == "End") {
    websocket.kill();

    websocket.on("exit", function (code) {
      console.log(`Websocket exited with ${code}.`);
      res.send("Disconnected");
    });
  }
});

var roscore;
app.post("/roscore:id", function (req, res) {
  var id = req.params.id;
  if (id == "Start") {
    roscore = execFile("ros2", ["daemon", "start"], function (err, stdout, stderr) {
      if (err) {
        console.log(err);
      }
    });
    console.log("Roscore Started");
    res.send("Connected");
  } else if (id == "End") {
    roscore.kill();
    roscore.on("exit", function (code) {
      console.log(`Roscore exit with ${code}`);
      res.send("Disconnected");
    });
  }
});

var gazebo;
app.post("/gazebo:id", function (req, res) {
  var id = req.params.id;
  if (id == "Start") {
    gazebo = execFile(
      "ros2",
      ["launch", "bot", "simple_gazebo_launch.py"],
      function (err, stdout, stderr) {
        if (err) {
          console.log(err);
        }
      }
    );
    console.log("Gazebo Started");
    res.send("Connected");
  } else if (id == "End") {
    gazebo.kill();
    gazebo.on("exit", function (code) {
      console.log(`Gazebo exit with ${code}`);
      res.send("Disconnected");
    });
  }
});

var mapviz;
app.post("/mapviz:id", function (req, res) {
  var id = req.params.id;
  if (id == "Start") {
    mapviz = execFile(
      "ros2",
      ["launch", "mapviz", "mapviz_launch.py"],
      function (err, stdout, stderr) {
        if (err) {
          console.log(err);
        }
      }
    );
    console.log("Mapviz Started");
    res.send("Connected");
  } else if (id == "End") {
    mapviz.kill();

    mapviz.on("exit", function (code) {
      console.log(`Mapviz exit with ${code}`);
      res.send("Disconnected");
    });
  }
});

var cam;
app.post("/cam:id", function (req, res) {
  var id = req.params.id;
  if (id == "Start") {
    cam = execFile(
      "ros2",
      ["run", "mjpeg_server", "mjpeg_server"],
      function (err, stdout, stderr) {
        if (err) {
          console.log(err);
        }
      }
    );

    console.log("Camera Started");
    res.send("Connected");
  } else if (id == "End") {
    cam.kill();
    cam.on("exit", function (code) {
      console.log(`Camera exit with ${code}`);
      res.send("Disconnected");
    });
  }
});

var autonomous;
app.post("/autonomous:id", function (req, res) {
  var id = req.params.id;
  if (id == "Start") {
    autonomous = execFile(
      "ros2",
      ["launch", "bot", "autonomous_launch.py"],
      function (err, stdout, stderr) {
        if (err) {
          console.log(err);
        }
      }
    );
    console.log("Autonomous Task Started");
    res.send("Connected");
  } else if (id == "End") {
    autonomous.kill();
    autonomous.on("exit", function (code) {
      console.log(`Autonomous Task exit with ${code}`);
      res.send("Disconnected");
    });
  }
});

var Panorama;
app.post("/Panorama:id", function (req, res) {
  var id = req.params.id;
  if (id == "Start") {
    Panorama = execFile(
      "ros2",
      ["launch", "ydlidar_ros_driver", "lidar_view_launch.py"],
      function (err, stdout, stderr) {
        if (err) {
          console.log(err);
        }
      }
    );
    console.log("Panorama started");
    res.send("Connected");
  } else if (id == "End") {
    Panorama.kill();

    Panorama.on("exit", function (code) {
      console.log(`Panorama exited with ${code}.`);
      res.send("Disconnected");
    });
  }
});

app.listen(1008, function () {
  console.log("Server running on 1008");
});
