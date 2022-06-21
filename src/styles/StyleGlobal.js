import styled from "styled-components"

export const DIVPRINC = styled.div`
width: 100%;


    .IMGNAV{
        width: 100%;
        height: 100%;

        img{
            width: 100%;
            height: 35%;
        }
    }
`

export const DIV = styled.div`
position: relative;
width: 80%;

    img{
        width: 20px;
        height: 20px;
    }

    @media (max-width: 500px) {
        .piePagina{

          section{
            display: none !important;
          }

        .piePagina2{
            background-color: #FFFFFF;
        }
    }
    }

    @media (min-width: 501px) {
        .piePagina2{

          section{
            display:none !important;
          }
      }
    }
`

/* # Guía de estilo de front-end

## Layout

Los diseños se crearon con los siguientes anchos:

- Mobile: 375px
- Desktop: 1440px

## Colores

### Primario

- Bright Blue: hsl(220, 98%, 61%)
- Check Background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)

### Neutral

### Light Theme

- Very Light Gray: hsl(0, 0%, 98%)
- Very Light Grayish Blue: hsl(236, 33%, 92%)
- Light Grayish Blue: hsl(233, 11%, 84%)
- Dark Grayish Blue: hsl(236, 9%, 61%)
- Very Dark Grayish Blue: hsl(235, 19%, 35%)

### Dark Theme

- Very Dark Blue: hsl(235, 21%, 11%)
- Very Dark Desaturated Blue: hsl(235, 24%, 19%)
- Light Grayish Blue: hsl(234, 39%, 85%)
- Light Grayish Blue (hover): hsl(236, 33%, 92%)
- Dark Grayish Blue: hsl(234, 11%, 52%)
- Very Dark Grayish Blue: hsl(233, 14%, 35%)
- Very Dark Grayish Blue: hsl(237, 14%, 26%)

## Tipografía

### Body Copy

- Font size: 18px

### Font

- Family: [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans)
- Weights: 400, 700 */