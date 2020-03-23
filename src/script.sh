clear;
npx tsc main.ts;
node main.js
browserify -e main.js -o bundle_main.js;
mv bundle_main.js ./static/;
