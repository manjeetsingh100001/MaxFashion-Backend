const app = require('./index');
// const PORT = 5000;

const connect = require('./configs/db')



app.listen(5000, async () => {
    try {
        await connect();
        console.log('Listening on port 5000')
    } catch (err) {
        console.error(err.message);
    }
});

