import {css, CSSProp} from "styled-components"


export const mobile = (props : CSSProp) => {
    return css`
        @media only screen and (max-width: 430px){
            ${props}
        }
    `;
}