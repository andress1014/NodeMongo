const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect(
        "mongodb://localhost:27017/homecenter",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            keepAlive: true,
        },
        (err) => {
            if (err) {
                console.log(`ERROR DB: ${err}`);
            } else {
                console.log(`correct connection established`)
            }
        }
    )
}
connect();