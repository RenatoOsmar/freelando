import { ThemeProvider }from '@emotion/react';

const tema = {
    cores: {
        branco:'',
        atencao:'',
        focus:'',
       primarias:{
        a:'#5754ED',
        b:'',
        c:'',
       },
       secundarias:{
        a:'#EBEAF9',
        b:'',
        c:'',
    },
    neutras: {
        a:'',
        b:'',
        c:'',
    },
    dark: {
        a:'',
        b:'',
    },
},
espacamento: {
    s:'16px',
    l:'32',
},
fontFamily: "'Montserrat', sans-serif" 
}

export const ProvedorTema = ({children}) => {
    return (
        <ThemeProvider theme={tema}>
           {children}
        </ThemeProvider>
    )

    }
