import styled from "styled-components"

export const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 2em;
    padding: 1rem;
    padding-top: 2rem;
    align-content: center;
    width: 100vw;
    height: 3vh;
`

export const Div1 = styled.div`
    grid-area: 1 / 1 / 2 / 3;
    display: flex;
    flex-direction: row;
    align-content: center;
    color: white;
    padding: 0 1rem;
`
export const Div2 = styled.div`
    grid-area: 1 / 3 / 2 / 7;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    position: relative;
    color: white;
    top: 2.5px;
`
export const Div3 = styled.div`
  position: relative;
  right: 25px;
  bottom: 2.5px;
  grid-area: 1 / 8 / 2 / 9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
`;

export const Span = styled.span`
    font: ${props => props.theme.fonts.title};
    padding-left: .2em;
    font-size: 2rem;
    color: white;
`

export const SocialIcons = styled.a`
    transition: 0.3s ease;
    color: white;
    border-radius: 50px;
    padding: 8px;
    &:hover {
        background-color: #38234c;
        transform: scale(1.2);
        cursor: pointer;
    }
`