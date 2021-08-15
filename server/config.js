exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? '#' //put hosted url here
  : 'http://localhost:3000'