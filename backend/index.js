const express = require('express');
const cors = require('cors');
const axios = require('axios');
const port = 3000;

const app = express();
app.use(express.json());
app.use(cors({origin:true}));


app.post("/auth", async(req, res) => {
    const {username} = req.body;

    try{
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name:username},
            {headers :{"private-key" : "8a931773-4878-4399-8b56-edbd167472a8"}}
        )
        return res.status(r.status).json(r.data);
    }catch(e){
        console.log(e);
    }
});

app.listen(port, () => {
    console.log(`Server is working on ${port}`)
})