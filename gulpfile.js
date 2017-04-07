const gulp = require("gulp");
const sass = require("gulp-sass");
const babel = require("gulp-babel");


gulp.task("default", () => {
	gulp.watch("sass/**/*.scss", ["styles"]);
	gulp.watch("index.js", ["scripts"]);
});

gulp.task("styles", () => {
	gulp.src("sass/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("./public/"));
});

gulp.task("scripts", () => {
	gulp.src("index.js")
		.pipe(babel({
			presets: ["es2015"]
		}))
		.pipe(gulp.dest("./public/"));
});
