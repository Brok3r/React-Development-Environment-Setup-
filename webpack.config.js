module.exports = {
  entry: './main.js', // Punto de entrada
  output: { 
    path: './', // ruta salida  también -> path.join(__dirname, 'dist'),
    filename: 'index.js' // bundled file
  },
  devServer: {
  	inline: true, //recarga al vuelo
    port: 3333
  }, 
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
        	presets: ['es2015', 'react']
        }
      }
    ]
  }
};