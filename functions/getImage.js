const imageModel = require(__dirname + "/../models/imageModel.js")

const getImageById = async (id) => {
	const img = await imageModel.findById(id).exec();
	if (!img) {
		return null;
	}
	
}

abcdefghi
