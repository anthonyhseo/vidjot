if(process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: `mongodb://admin:password@ds247648.mlab.com:47648/vidjot-ahseo`
  };
} else {
  module.exports = {
    mongoURI: 'mongodb://localhost/vidjot-dev'
  }
}