const axios = require('axios');

const getImage = async (req, res) =>
{
    try {

        const { imageUrl } = req.body;

        const response = await axios.get(imageUrl, {
            responseType: 'arraybuffer'
        });

        const image = new Buffer.from(response.data, 'binary');

        res.status(200).send({"bufferData":image});

    } catch (err) {
        res.status(500).send({"error":"error getting image hash"});
    }

}

exports.getImage = getImage;