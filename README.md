# React-Development-Environment-Setup-
 Development Environment Setup for React.js with babel and webpack.


### Development Environment Setup

``` js
npm init 
npm install react react-dom --save // para guardar en las dependencias

// instalamos globalmente ( si no está ya instalado)
$ sudo npm install babel webpack webpack-dev-server -g

// instala las dependencias
npm install 


// app.js capitalizado poruqe es el primer componente react. main.js es la entrada de la aplicación 
$ touch index.html App.js main.js webpack.config.js
```

Configuramos nuestro archvio webpack.config.js
este compilará toda nuestro js y JSX y también lanzará nuestro server de desarrollo.
Tenemos que exportar nuestro objeto de configuración.

``` js 
module.exports = {
  entry: 
    './main.js', // Punto de entrada
  output: { 
    path: './', // ruta salida  también -> path.join(__dirname, 'dist'),
    filename: 'index.js', // bundled file
  },
  devServer: {
  	inline: true, //recarga al vuelo
    port: 333
  }, 
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: 'babel',
        query: {
        	presets: ['es2015', 'react']
        }
      }
    ]
  }
}

// también tenemos que añadir en nuestro package json:
"scripts": {
	"start": "webpack-dev-server"
},
 
y por último:

$ npm start
```