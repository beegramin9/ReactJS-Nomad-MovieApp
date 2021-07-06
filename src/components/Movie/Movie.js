/* 개별 movie를 render하는 파일 */
import React from "react";
import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import './movies.css'

import { MovieCard, MovieImg, MovieDataSet, MovieTitle, 
    MovieGenreList, MovieGenre, MovieYear, MovieSummary } from './MovieStyle';

/* movie는 state가 필요 없기때문에, 즉 뭔가 변하지 않는다.
component 클래스를 사용하지 않아도 된다. */
function Movie({id, year, title, summary, poster, genres}) {
    return (
        /* 전체를 Link로 감아서 각 movie의 디테일로 갈 수 있도록 */
    <Link to={
        /* props를 준거야, object처럼 생겼잖아 */
        {pathname:`./movie/${id}`,
        state: {
            /* ES6 */
            year, title, summary, poster, genres
        }
    }} className="anchor">  
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
    </Link>   
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