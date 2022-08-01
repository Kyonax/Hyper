exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor: '#f8f8f0',
    backgroundColor: '#272822',
    cursorColor: 'rgba(249,38,114,0.6)',
    colors: {
      black: '#272822',
      red: '#f92672',
      green: '#a6e22e',
      yellow: '#fd971f',
      blue: '#ae81ff',
      magenta: '#f92672',
      cyan: '#66d9ef',
      white: '#f8f8f0',
      lightBlack: '#49483e',
      lightRed: '#f92672',
      lightGreen: '#a6e22e',
      lightYellow: '#e6db74',
      lightBlue: '#ae81ff',
      lightMagenta: '#f92672',
      lightCyan: '#66d9ef',
      lightWhite: '#f8f8f2'
    }
  });
}
