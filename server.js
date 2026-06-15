const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});

let payments = {};

/* CREATE */
app.post("/create-payment", (req, res) => {
    const paymentId = "PAY_" + Date.now();
    payments[paymentId] = { status: "pending" };
    res.json({ paymentId });
});

/* CONFIRM */
app.post("/confirm-payment", (req, res) => {
    const { paymentId } = req.body;

    if(payments[paymentId]){
        payments[paymentId].status = "success";

        // 🔥 SEND TO PC
        io.emit("payment-success", { paymentId });

        return res.json({ success: true });
    }

    res.status(404).json({ error: "not found" });
});

/* STATUS */
app.get("/status/:id", (req, res) => {
    res.json(payments[req.params.id] || {});
});

io.on("connection", (socket)=>{
    console.log("User connected:", socket.id);
});

server.listen(3000, "0.0.0.0", ()=>{
    console.log("Server running on 3000");
});

io.on("connection", (socket) => {

    socket.on("payment-success", (data) => {

        console.log("Payment success:", data);

        // broadcast to PC
        io.emit("payment-success", data);
    });

});
// io.on("connection", (socket) => {

//     socket.on("payment-success", (data) => {
//         io.emit("payment-success", data);
//     });

// });

// io.on("connection", (socket) => {

//     console.log("User connected:", socket.id);

//     socket.on("payment-confirmed", (data) => {

//         console.log("Payment confirmed:", data);

//         // 🔥 BROADCAST TO ALL CLIENTS (PC + admin)
//         io.emit("payment-success", {
//             paymentId: data.paymentId
//         });
//     });

// });