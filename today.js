// Array.prototype.customSlice = function (start, end) {
//   const length = this.length;
//   start = start || 0;
//   end = end === undefined ? length : end;

//   start = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
//   end = end < 0 ? Math.max(length + end, 0) : Math.min(end, length);

//   const result = [];
//   for (let i = start; i < end; i++) {
//     result.push(this[i]);
//   }
//   return result;
// };

// const data = [1, 2, 3, 4, 5];
// console.log(data.customSlice(1));

// Array.prototype.custom = function (start = 0, end) {
//   let length = this.length;
//   start = start < 0 ? Math.max(length + start, 0) : Math.min(length, start);
//   end = end == undefined ? length : end;
//   end = end < 0 ? Math.max(length + end, 0) : Math.min(end, length);

//   const result = [];
//   for (let i = start; i < end; i++) {
//     result.push(this[i]);
//   }
//   return result;
// };

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.custom(1, 4));
// console.log(arr.custom());
// console.log(arr.custom(-3, -1));

// const data = "India is my country";
// let word;
// let result;
// for (let i = data.length - 1; i >= 0; i--) {
//   if (data[i] == " ") {
//     result = word + " " + result;
//     word = "";
//   } else {
//     word = data[i] + word;
//   }
// }
// result = word + " " + result;

// console.log(result);

// function reverseString(sentence) {
//   let words = "";
//   let result = "";
//   for (let i = sentence.length - 1; i >= 0; i--) {
//     if (sentence[i] == " ") {
//       result = words + " " + result;
//       words = "";
//     } else {
//       words = sentence[i] + words;
//     }
//   }
//   result = words + " " + result;
//   //   console.log(result);
//   return result;
// }
// console.log(reverseString("India is my country"));

require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { connectionDB } = require("./config/connection");
const Seat = require("./models/seat");
const seatRouter = require("./routes/seat");
const userRouter = require("./routes/user");
const { checkAuthection } = require("./middleware/authetication");
const { verifyToken } = require("./service/auth");
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 9001;

// Connect to MongoDB
// connectionDB("mongodb://127.0.0.1:27017/booking").then(() =>
//   console.log(`Connection established successfully`)
// );
// console.log(process.env.MONGO_URL);
connectionDB(process.env.MONGO_URL).then(() =>
  console.log("Connection established successfully")
);

app.use(checkAuthection());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("cors")());
app.use("/api/seats", seatRouter);
app.use("/api/user", userRouter);

// Handle WebSocket connections

io.on("connection", (socket) => {
  console.log("A user connected hii");
  const token = socket.handshake.query.token;

  // Verify the token and retrieve user data
  if (token) {
    try {
      const userPayload = verifyToken(token);
      socket.user = userPayload;
    } catch (error) {
      console.error("Authentication failed:", error);
      socket.disconnect();
    }
  } else {
    console.log("No token provided");
    socket.disconnect();
  }

  // Event to set a seat to pending
  socket.on("setPending", async ({ seatNumber }) => {
    try {
      if (!socket.user) {
        socket.emit("error", "User is not authenticated");
        return;
      }

      // Find the seat and update its pending state
      const seat = await Seat.findOne({ seatNumber });

      if (!seat) {
        socket.emit("error", "Seat not found.");
        return;
      }

      // Ensure that the current user is allowed to set the seat as pending
      if (
        seat.pending.isPending &&
        seat.pending.userId.toString() !== socket.user._id.toString()
      ) {
        socket.emit(
          "error",
          "This seat is already pending, and you are not the user who reserved it."
        );
        return;
      }

      // Update the seat to set it as pending for the current user
      seat.pending.isPending = true;
      seat.pending.userId = socket.user._id;
      await seat.save();

      io.emit("seatUpdated", seat);
    } catch (err) {
      console.error("Error setting seat to pending:", err);
      socket.emit("error", "There was an error setting the seat to pending.");
    }
  });

  // Event to set a seat to available
  socket.on("setAvailable", async ({ seatNumber }) => {
    try {
      if (!socket.user) {
        socket.emit("error", "User is not authenticated");
        return;
      }

      const seat = await Seat.findOne({ seatNumber });

      if (!seat) {
        socket.emit("error", "Seat not found.");
        return;
      }

      // Ensure that only the user who set the seat to pending can set it to available
      if (
        seat.pending.isPending &&
        seat.pending.userId.toString() !== socket.user._id.toString()
      ) {
        socket.emit(
          "error",
          "You cannot change the pending state of this seat."
        );
        return;
      }

      seat.pending.isPending = false;
      seat.pending.userId = null;
      await seat.save();

      io.emit("seatUpdated", seat);
    } catch (error) {
      console.error("Error setting seat to available:", error);
      socket.emit("error", "There was an error setting the seat to available.");
    }
  });

  /**Event to book a seat */

  socket.on("bookSeat", async ({ seatNumber }) => {
    try {
      if (!socket.user) {
        socket.emit("error", "User is not authenticated");
        return;
      }

      const seat = await Seat.findOneAndUpdate(
        { seatNumber },
        {
          "booking.isBooked": true,
          "booking.userId": socket.user._id,
          "pending.isPending": false,
          "pending.userId": null,
        },
        { new: true }
      );

      if (seat) {
        io.emit("seatUpdated", seat);
      }
    } catch (err) {
      console.error("Error booking seat:", err);
      socket.emit("error", "There was an error booking the seat.");
    }
  });

  socket.on("resetSeats", async () => {
    console.log("hii");
    try {
      // Check if the user is authenticated (optional, based on your use case)
      if (!socket.user) {
        socket.emit("error", "User is not authenticated");
        return;
      }

      // Reset all seats in the database
      await Seat.updateMany(
        {},
        {
          "booking.isBooked": false,
          "booking.userId": null,
          "pending.isPending": false,
          "pending.userId": null,
        }
      );

      // Emit the reset event to all clients
      io.emit("resetSeats");

      console.log("All seats have been reset successfully.");
    } catch (err) {
      console.error("Error resetting seats:", err);
      socket.emit("error", "There was an error resetting the seats.");
    }
  });

  socket.on("resetSeats", async () => {
    try {
      // Reset all seats in the database
      await Seat.updateMany(
        {},
        {
          "booking.isBooked": false,
          "booking.userId": null,
          "pending.isPending": false,
          "pending.userId": null,
        }
      );

      // Emit the reset event to all clients
      io.emit("resetSeats");
    } catch (err) {
      console.error("Error resetting seats:", err);
      socket.emit("error", "There was an error resetting the seats.");
    }
  });
});

server.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
