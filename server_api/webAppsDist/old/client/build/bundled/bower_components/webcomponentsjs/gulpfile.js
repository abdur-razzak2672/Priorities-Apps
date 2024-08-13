"use strict";const gulp=require("gulp"),sourcemaps=require("gulp-sourcemaps"),rename=require("gulp-rename"),rollup=require("rollup-stream"),source=require("vinyl-source-stream"),del=require("del"),runseq=require("run-sequence"),closure=require("google-closure-compiler").gulp(),babel=require("rollup-plugin-babel"),license=require("rollup-plugin-license");function debugify(e,s,o){s||(s=e);const u={entry:`./entrypoints/${e}-index.js`,format:"iife",moduleName:"webcomponentsjs"};return Object.assign(u,o),rollup(u).pipe(source(`${e}-index.js`),"entrypoints").pipe(rename(s+".js")).pipe(gulp.dest("./"))}function closurify(e,s){s||(s=e);const o={compilation_level:"ADVANCED",language_in:"ES6_STRICT",language_out:"ES5_STRICT",isolation_mode:"NONE",output_wrapper_file:"closure-output.txt",assume_function_wrapper:!0,js_output_file:`${s}.js`,warning_level:"VERBOSE",rewrite_polyfills:!1,module_resolution:"NODE",entry_point:`entrypoints/${e}-index.js`,dependency_mode:"STRICT",externs:["externs/webcomponents.js","node_modules/@webcomponents/custom-elements/externs/custom-elements.js","node_modules/@webcomponents/html-imports/externs/html-imports.js","node_modules/@webcomponents/shadycss/externs/shadycss-externs.js","node_modules/@webcomponents/shadydom/externs/shadydom.js"]};return gulp.src(["entrypoints/*.js","src/*.js","node_modules/promise-polyfill/src/*.js","node_modules/@webcomponents/**/*.js","!node_modules/@webcomponents/*/externs/*.js","!node_modules/@webcomponents/*/node_modules/**","!**/bower_components/**"],{base:"./",follow:!0}).pipe(sourcemaps.init()).pipe(closure(o)).pipe(sourcemaps.write(".")).pipe(gulp.dest("."))}gulp.task("debugify-hi",()=>debugify("webcomponents-hi")),gulp.task("debugify-hi-ce",()=>debugify("webcomponents-hi-ce")),gulp.task("debugify-hi-sd-ce",()=>debugify("webcomponents-hi-sd-ce")),gulp.task("debugify-hi-sd-ce-pf",()=>{return debugify("webcomponents-hi-sd-ce-pf","webcomponents-lite",{context:"window"})}),gulp.task("debugify-sd-ce",()=>debugify("webcomponents-sd-ce")),gulp.task("debugify-ce",()=>debugify("webcomponents-ce")),gulp.task("debugify-sd",()=>debugify("webcomponents-sd")),gulp.task("debugify-hi-sd",()=>debugify("webcomponents-hi-sd")),gulp.task("closurify-hi",()=>closurify("webcomponents-hi")),gulp.task("closurify-hi-ce",()=>closurify("webcomponents-hi-ce")),gulp.task("closurify-hi-sd-ce",()=>closurify("webcomponents-hi-sd-ce")),gulp.task("closurify-hi-sd-ce-pf",()=>closurify("webcomponents-hi-sd-ce-pf","webcomponents-lite")),gulp.task("closurify-sd-ce",()=>closurify("webcomponents-sd-ce")),gulp.task("closurify-hi-sd",()=>closurify("webcomponents-hi-sd")),gulp.task("closurify-ce",()=>closurify("webcomponents-ce")),gulp.task("closurify-sd",()=>closurify("webcomponents-sd"));const babelOptions={presets:[["minify",{keepFnName:!0}]]};gulp.task("debugify-ce-es5-adapter",()=>debugify("custom-elements-es5-adapter","",{plugins:[babel(babelOptions),license({banner:{file:"./license-header.txt"}})]})),gulp.task("default",["closure"]),gulp.task("clean-builds",()=>del(["custom-elements-es5-adapter.js{,.map}","webcomponents*.js{,.map}","!webcomponents-loader.js"])),gulp.task("debug",e=>{runseq("clean-builds",["debugify-ce","debugify-hi","debugify-hi-ce","debugify-hi-sd","debugify-hi-sd-ce","debugify-hi-sd-ce-pf","debugify-sd","debugify-sd-ce","debugify-ce-es5-adapter"],e)}),gulp.task("closure",e=>{runseq("clean-builds",...["closurify-ce","closurify-hi","closurify-hi-ce","closurify-hi-sd","closurify-hi-sd-ce","closurify-hi-sd-ce-pf","closurify-sd","closurify-sd-ce","debugify-ce-es5-adapter"],e)});
