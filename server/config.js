// exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
//   ? '#' //put hosted url here
//   : 'http://localhost:3000'

  exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'development'
   ? '#'
   : 'http://localhost:3000'