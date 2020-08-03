// layout => scss
const contextLayoutScss = require.context('@/layout', true, /\.scss/);
contextLayoutScss.keys().forEach(item => contextLayoutScss(item));

// view => scss
const contextViewScss = require.context('@/views', true, /\.scss/);
contextViewScss.keys().forEach(item => contextViewScss(item));

// components => scss
const contextCompScss = require.context('@/layout', true, /\.scss/);
contextCompScss.keys().forEach(item => contextCompScss(item));
