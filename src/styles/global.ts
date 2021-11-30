import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFFFFF;

    --black: #0B0B0D;
    
    --gray-100: #8D8D92;
    --gray-500: #1B1B1E;

    --blue-500: #1C1CA6;
    --blue-600: #141463;
    --blue-900: #04041A;
    
    --yellow-500: #FAA916;
    --red-500: #96031A;

    --bg-gradient-blue-300: linear-gradient(180deg, rgba(32,32,129,1) 0%, rgba(46,46,212,1) 100%);
    --bg-gradient-blue-500: linear-gradient(180deg, rgba(4,4,26,1) 0%, rgba(20,20,99,1) 47%, rgba(28,28,166,1) 100%);
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Hind', sans-serif;
  }
`