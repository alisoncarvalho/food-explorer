import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;

       
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;

        *::-webkit-scrollbar {
            width: 2.2rem;
            height: 2.2rem;
            border-radius: 9999px;
        }

        

         
    }

    body, input, textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    input[type=number]::-webkit-inner-spin-button{
        -weblit-appearance:none;
        appearance: none;
        
    }

    input[type=number]{
        -moz-appearance:textfield;
        appearance: textfield;
    }

    button {
        font-family: 'Poppins', sans-serif;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.8);
    }
`;
