/* 개별 movie를 render하는 파일 */
import React from "react";
import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import './movies.css'


/* movie는 state가 필요 없기때문에 component 클래스를 사용하지 않아도 된다. */
function Movie({id, year, title, summary, poster, genres}) {
    return (
    <Link to={{
        pathname:`./movie/${id}`,
        state: {
            /* ES6 */
            year, title, summary, poster, genres
        }
    }}>  
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie_data">
                <h3 className="movie__title ">{title}</h3>
                <ul className="movie__genres ">
                    {genres.map( (genre, index) => {
                        /* 같은 클래스 요소가 여러개 있으면 리액트에서는 id마냥 key를 달라고 함
                        JS map에는 python의 enumerate처럼 index를 얻을 수 있는 기능 있음 */
                        return <li key={index} className="genres__genre">{genre}</li>
                    })}
                </ul>
                <h3 className="movie__year ">{year}</h3>
                {/* summary 텍스트가 너무 기니까 좀 자르자!
                summary는 array로 들어오는데 얘를 어떻게 자를까? */}
                <p className="movie__summary">{summary.slice(0, 140)}</p>
            </div>
        </div>
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