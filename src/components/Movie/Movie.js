/* 개별 movie를 render하는 파일 */
import React from "react";
import PropTypes from "prop-types";
import { StyledLink } from "../../styles/GlobalComponents/LinkStyle";
import { MovieCard, MovieImg, MovieDataSet, MovieTitle, 
    MovieGenreList, MovieGenre, MovieYear, MovieSummary } from './MovieStyle';

function Movie({id, year, title, summary, poster, genres}) {
    return (
        /* 전체를 Link로 감아서 각 movie의 디테일로 갈 수 있도록 */
    <StyledLink to={ {pathname:`./movie/${id}`,
                    /* props를 준거야, object처럼 생겼잖아 */
                    state: {year, title, summary, poster, genres} /* ES6 */
        }}>  
        <MovieCard>
            <MovieImg src={poster} alt={title} title={title}/>
            <MovieDataSet>
                <MovieTitle>{title}</MovieTitle>
                <MovieGenreList>
                {genres.map ( (genre, index) => (
                    <MovieGenre key={index}>{genre}</MovieGenre>
                ))}
                </MovieGenreList>
                <MovieYear>{year}</MovieYear>
                <MovieSummary>{summary.slice(0, 140)}...</MovieSummary>
            </MovieDataSet>
        </MovieCard>
    </StyledLink>   
    )
}

/* React 컴포넌트의 propTypes 속성 
어짜피 App.js에서 클래스로 들어가잖아*/
Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    /* 이미지도 다 바이너리 문자열로 가져오니까 */
    poster : PropTypes.string.isRequired,
    /* array의 string 요소 */
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie