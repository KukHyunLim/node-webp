const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

(async () => {
	const files = await imagemin(['sources_index/*.{jpg,png}'], {
		destination: 'build/images 1%',
		plugins: [
			imageminWebp({quality: 1})
		]
	});

	console.log(files);
	//=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();