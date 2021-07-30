import styled from "styled-components"


export const DetailCard = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 3fr 4fr;
    background-color: rgb(247 ,247 ,232);
    margin-bottom: 1em;
    padding: 0 1em;
    width: 100%;
    height: 58.5em;
    border-radius: 5px;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.85), 0 1px 3px rgba(0, 0, 0, 80);
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
        height: 51em;
    }
`

export const DetailImg = styled.img`
    /* img 태그니까 여기에 display를 걸어도 안 먹히는 것 */
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.55), 0 1px 3px rgba(0, 0, 0, .55);
`

export const DetailDataSet = styled.div`
    position: relative;
    /* 위에서 패딩을 주지 말고 여기서 패딩을 주자 */
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: column;
    /* 아 확실하네. 이게 column을 줘버리면 justify랑 align 방향이 바껴버리네.justify-items.justify-items. */
    // justify-content: space-between;
    align-content: flex-start;
    overflow: auto;
    gap: 1em;
    &::-webkit-scrollbar {
        margin-right: -10px;
        width: 10px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color:  rgba(34, 34, 34, .4);
        border: 2px solid rgba(34, 34, 34, .6);
        border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 5px;
    }
`




export const DetailTitle = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 3em;
    font-weight: bold;
    padding: 0;
    margin: 0;
`

export const DetailGenreList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin:0;
    padding:0;
    // height: 4.5em;


    // text-overflow: ellipsis;
    // display: -webkit-box;
    // -webkit-line-clamp: 3; /* 라인수 */
    // -webkit-box-orient: vertical;
    // word-wrap:break-word; 
    // height: 3em;
`

export const DetailGenre = styled.li`
    margin-right: 1em;
    font-size: 1.5em;

`

export const DetailYear = styled.h3`
    font-weight: bold;
    font-size: 2em;
`

export const DetailSummary = styled.p`
    padding-right: .5em;
    font-size: 1.5em;
    
`
export const DetailButtonSection = styled.div`
    margin-top: .5em;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
`

export const DetailButton = styled.button`
    /* 버튼, 인풋 기본모양이 싫다면 초기화하는 기능 */
    all: unset;
    cursor: pointer;
    background-color: rgba(34, 34, 34, .7);
    /* 패딩 갑옷 생각하면 됨. 안으로 들어가잖아? */
    margin:0;
    padding: 5px 0px;
    width: 80px;
    text-align: center;
    border-radius: 5px;
    /* 경계선 */
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.85), 0 1px 3px rgba(0, 0, 0, 80);

    border: 2px solid rgba(0, 0, 0, 0.2);
    /* rgba의 a는 투명도 */
    color: rgba(0, 0, 0, 0.7);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1em;
    min-height: 2em;

    &:hover {
        background-color:  rgb(247 ,247 ,232);
        transform: scale(0.95);
        cursor: pointer;
    }
    &:active {
        text-decoration: none;
    }
`