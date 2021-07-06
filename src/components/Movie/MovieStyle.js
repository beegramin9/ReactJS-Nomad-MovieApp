import styled from "styled-components"

/* 전체를 Link로 감아서 각 movie의 디테일로 갈 수 있도록
 */


export const MovieCard = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 2fr 5fr;
    background-color: white;
    margin-bottom: 70px;
    padding: 20px;
    border-radius: 5px;
    /* color: #adaeb9; */
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`

export const MovieImg = styled.img`
    grid-column: 1 / 2;
    position: relative;
    top: -50px;
`

export const MovieDataSet = styled.div`
    grid-column: 2 / 3;
`

export const MovieTitle = styled.h3`
`

export const MovieGenreList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`

export const MovieGenre = styled.li`
    margin-right: .5em;
`

export const MovieYear = styled.h3`
`

export const MovieSummary = styled.p`
`