// import { Server } from "socket.io"

// let connections = {}
// let messages = {}
// let timeOnline = {}

// export const connectToSocket = (server) => {
//     const io = new Server(server, {
//         cors: {
//             origin: "*",
//             methods: ["GET", "POST"],
//             allowedHeaders: ["*"],
//             credentials: true
//         }
//     });

//     io.on("connection", (socket) => {

//         console.log("SOMETHING CONNECTED")

//         socket.on("join-call", (path) => {

//             if (connections[path] === undefined) {
//                 connections[path] = []
//             }
//             connections[path].push(socket.id)

//             timeOnline[socket.id] = new Date();

//             // connections[path].forEach(elem => {
//             //     io.to(elem)
//             // })

//             for (let a = 0; a < connections[path].length; a++) {
//                 io.to(connections[path][a]).emit("user-joined", socket.id, connections[path])
//             }

//             if (messages[path] !== undefined) {
//                 for (let a = 0; a < messages[path].length; ++a) {
//                     io.to(socket.id).emit("chat-message", messages[path][a]['data'],
//                         messages[path][a]['sender'], messages[path][a]['socket-id-sender'])
//                 }
//             }

//         })

//         socket.on("signal", (toId, message) => {
//             io.to(toId).emit("signal", socket.id, message);
//         })

//         socket.on("chat-message", (data, sender) => {

//             const [matchingRoom, found] = Object.entries(connections)
//                 .reduce(([room, isFound], [roomKey, roomValue]) => {

//                     if (!isFound && roomValue.includes(socket.id)) {
//                         return [roomKey, true];
//                     }

//                     return [room, isFound];

//                 }, ['', false]);

//             if (found === true) {
//                 if (messages[matchingRoom] === undefined) {
//                     messages[matchingRoom] = []
//                 }

//                 messages[matchingRoom].push({ 'sender': sender, "data": data, "socket-id-sender": socket.id })
//                 console.log("message", matchingRoom, ":", sender, data)

//                 connections[matchingRoom].forEach((elem) => {
//                     io.to(elem).emit("chat-message", data, sender, socket.id)
//                 })
//             }

//         })

//         socket.on("disconnect", () => {

//             var diffTime = Math.abs(timeOnline[socket.id] - new Date())

//             var key

//             for (const [k, v] of JSON.parse(JSON.stringify(Object.entries(connections)))) {

//                 for (let a = 0; a < v.length; ++a) {
//                     if (v[a] === socket.id) {
//                         key = k

//                         for (let a = 0; a < connections[key].length; ++a) {
//                             io.to(connections[key][a]).emit('user-left', socket.id)
//                         }

//                         var index = connections[key].indexOf(socket.id)

//                         connections[key].splice(index, 1)

//                         if (connections[key].length === 0) {
//                             delete connections[key]
//                         }
//                     }
//                 }

//             }

//         })

//     })

//     return io;
// }

import { Server } from "socket.io";

let connections = {};
let messages = {};
let timeOnline = {};
let userNames = {}; // 🟢 NAYA: Yahan hum sabke usernames save karenge

export const connectToSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["*"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("SOMETHING CONNECTED");

    // 🟢 NAYA: 'join-call' me frontend se ab 'username' bhi aayega
    socket.on("join-call", (path, username) => {
      if (connections[path] === undefined) {
        connections[path] = [];
      }
      connections[path].push(socket.id);
      timeOnline[socket.id] = new Date();

      // 🟢 NAYA: Socket ID ke sath us user ka naam save kar lo
      userNames[socket.id] = username || "Participant";

      for (let a = 0; a < connections[path].length; a++) {
        // 🟢 NAYA: 'user-joined' event me ab hum userNames ka pura object bhi bhej rahe hain
        io.to(connections[path][a]).emit(
          "user-joined",
          socket.id,
          connections[path],
          userNames,
        );
      }

      if (messages[path] !== undefined) {
        for (let a = 0; a < messages[path].length; ++a) {
          io.to(socket.id).emit(
            "chat-message",
            messages[path][a]["data"],
            messages[path][a]["sender"],
            messages[path][a]["socket-id-sender"],
          );
        }
      }
    });

    socket.on("signal", (toId, message) => {
      io.to(toId).emit("signal", socket.id, message);
    });

    socket.on("chat-message", (data, sender) => {
      const [matchingRoom, found] = Object.entries(connections).reduce(
        ([room, isFound], [roomKey, roomValue]) => {
          if (!isFound && roomValue.includes(socket.id)) {
            return [roomKey, true];
          }
          return [room, isFound];
        },
        ["", false],
      );

      if (found === true) {
        if (messages[matchingRoom] === undefined) {
          messages[matchingRoom] = [];
        }
        messages[matchingRoom].push({
          sender: sender,
          data: data,
          "socket-id-sender": socket.id,
        });
        console.log("message", matchingRoom, ":", sender, data);

        connections[matchingRoom].forEach((elem) => {
          io.to(elem).emit("chat-message", data, sender, socket.id);
        });
      }
    });

    socket.on("disconnect", () => {
      var key;
      for (const [k, v] of JSON.parse(
        JSON.stringify(Object.entries(connections)),
      )) {
        for (let a = 0; a < v.length; ++a) {
          if (v[a] === socket.id) {
            key = k;

            for (let a = 0; a < connections[key].length; ++a) {
              io.to(connections[key][a]).emit("user-left", socket.id);
            }

            var index = connections[key].indexOf(socket.id);
            connections[key].splice(index, 1);

            if (connections[key].length === 0) {
              delete connections[key];
            }
          }
        }
      }
      // 🟢 NAYA: User ke chhodne par memory clean karne ke liye naam delete kar do
      delete userNames[socket.id];
    });
  });

  return io;
};
