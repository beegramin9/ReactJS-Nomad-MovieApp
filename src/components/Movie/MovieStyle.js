import styled from "styled-components"

export const MovieCard = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 2fr 5fr;
    background-color: white;
    margin-bottom: 10px;
    padding: 20px;
    max-height: 250px;
    border-radius: 5px;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`

export const MovieImg = styled.img`
    grid-column: 1 / 2;
    position: relative;
    top: -50px;
    width: 100%;
    margin-right: 30px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`

export const MovieDataSet = styled.div`
    grid-column: 2 / 3;
`

export const MovieTitle = styled.h3`
    margin-bottom: 5px;
    font-size: 24px;
    color: #2c2c2c;
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
    font-weight: 300;
`

export const MovieSummary = styled.p`
`