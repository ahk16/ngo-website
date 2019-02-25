const jwt_decode = require('jwt-decode');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YzYxMzY0OTFmODEwMjY1MmNhMDVlZjQiLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTU0OTg3NDc2MX0.rL6a_cmZpMux4su8BAcvCeTK6mlGxK2BI62ulLeh-vk';

var decoded = jwt_decode(token);
console.log(decoded);