/* 먼저 JS파일을 모듈화하지 않고 한 파일에 다 해보면서 시작 */

import React from "react";
/* 새로운 파일에서 새 컴포넌트를 만들려면 무조건 
파일마다 React를 import해줘야 함 */

import PropTypes from "prop-types"
// import Food from './1_propTypes'


/* React app은 하나의 component만을 render할 수 있다.
그래서 Food를 포함한 모든 다른 subApp들은 App.js의 App 안에 넣는 것이다.
*/

/* JSX 함수는 대문자로 시작함
JSX는 reusable인 component를 만들어낸다.
즉 반복문으로 쓸 수도 있고 App에다가 Food 여러번 넣을 수도 있고 그래. */
function Food({fav, name, picture, rating}) {
  // console.log(props);
  // console.log(props.fav);
  /* return 안에는 HTML 요소만 들어와야 함 */
  /* ES6문법. 파라미터에 props Object를 해체해서 넣을 수도 있음
  {fav} 이렇게 */
  return (
    <div>
      <h1>I like {fav}</h1>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
      <h4>{rating}/5.0</h4>
    </div>
  )
}

/* DB/API에서 들어온다고 가정한 데이터 */
const foodILike = [
  {
    id: 1,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7
  }
];



/* App 컴포(부모 컴포넌트)에서 정보를 Food 컴포로 보내는 법 
+ Food(자식 컴포넌트)에서 그 정보를 어떻게 사용하는지 */
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Food fav="kimchi" 
              something={true}
              papapa={['hello',1,2,3,4]}/>;
              {/* HTML과 매우 비슷한 구조 
        name은 prop이라 하고, kimchi는 value라고 함
        true나 array는 JS의 요소이기 때문에 {}로 감싸준다.        
        Food에서는 요 prop들을 받아서 Food(props), 즉 파라미터로 받는다.
      */}
        <Food fav="Samgyeopsal" 
              something={true}
              papapa={['hello',1,2,3,4]}/>;
        {/* 웹에 동적데이터를 추가하는 방법
        const foodILike = []
        복사붙여넣기가 끝이 아니죠. DB든 API든 우리가 받는 데이터는 받기 전까진
        모르니까. 반복문을 써야 합니다. 여기선 map함수를 사용함 */}
        {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)}


      </div>
    )
  }
}
/* propTypes가 하는 일
부모가 자식한테 넣어주는 prop들이 내가 원하는 prop들이 맞는 지 확인, 실수 방지
import PropTypes from "prop-types" 맨 위에 
propTypes 이름 바꾸면 안됨 */
Food.propTypes = {
  /* prop들의 description을 적어주면 됨 
  isRequired는 type이 string인 것이 requirement가 아니라 name이 필수적으로
  들어가냐 아니냐의 문제
  즉, rating은 있어도 되고 없어도 된다.*/
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
} 



export default App;