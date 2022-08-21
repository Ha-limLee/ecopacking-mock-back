import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = 5000;

const fakeData = {
    "code": 2000,
    "message": "성공",
    "data": [
        {
            "size": "1호",
            "ppList": [
                {
                    "id": "1",
                    "name": "사과",
                    "material": "종이",
                    "length": "1개"
                },
                {
                    "id": "2",
                    "name": "바나나",
                    "material": "종이",
                    "length": "3개"
                }
            ]
        },
        {
            "size": "2호",
            "ppList": [
                {
                    "id": "1",
                    "name": "사과",
                    "material": "종이",
                    "length": "1개"
                },
                {
                    "id": "3",
                    "name": "코다리",
                    "material": "종이",
                    "length": "1개"
                }
            ]
        }
    ]
}

app.get('/eco/order/1', (req, res) => {
    res.json(fakeData);
});

app.post('/eco/feedback', (req, res) => {
    const val = req.body;
    console.log(val);
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});