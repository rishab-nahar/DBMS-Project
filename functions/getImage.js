const imageModel = require(__dirname + "/../models/imageModel.js")

const extra = async () => {
	console.log("hello world");
}

const getImageById = async (id) => {
	const img = await imageModel.findById(id).exec();
	if (!img) {
		return null;
	}
	const ret = {
		contentType: img.contentType,
		data: img.data.toString('base64')
	}
	return ret;

}

abcdefghi
