import styled from "styled-components"

export const MovieCard = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 2fr 5fr;
    background-color: rgb(247 ,247 ,232);
    margin-bottom: 1em;
    padding-left: 1em;
    min-height: 22em;
    border-radius: 5px;
    box-shadow: 0 8px 10px rgba(50, 50, 93, 0.85), 0 1px 3px rgba(0, 0, 0, 80);
`

export const MovieImg = styled.img`
    /* img 태그니까 여기에 display를 걸어도 안 먹히는 것 */
    grid-column: 1 / 2;
    position: relative;
    top: -2em;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 8px 10px rgba(50, 50, 93, 0.85), 0 1px 3px rgba(0, 0, 0, 80);
`

export const MovieDataSet = styled.div`
    /* 위에서 패딩을 주지 말고 여기서 패딩을 주자 */
    grid-column: 2 / 3;
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: column;
    align-content: flex-start;
    justify-content: flex-start;
`

export const MovieTitle = styled.h3`
    flex: 3;
    font-size: 1.5em;
    font-weight: bold;
    min-height: 3em;
    padding: 0;
    margin: 0;
`

export const MovieGenreList = styled.ul`
    flex: .5;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin:0;
    padding:0;
`

export const MovieGenre = styled.li`
    margin-right: .5em;
`

export const MovieYear = styled.h3`
    flex: .5;
    font-weight: bold;
`

export const MovieSummary = styled.p`
    flex: 6;
    padding-right: .5em;
`