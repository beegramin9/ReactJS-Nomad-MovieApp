import React from "react"


class Detail extends React.Component {
    componentDidMount() {
        const {location : {state}, history} = this.props
        console.log(this.props);
        /* Movies 컴포넌트에서 받아온 props
        Detail 컴포넌트가 가지고 있는 속성으로 됨 */
        if (!state) {
            /* Movie 카드에서 들어온게 아니라면 Movie 카드 홈페이지로 되돌림
            this.props에 있는 history의 push() 를 이용함. redirect 기능 */
            history.push('/')
        }
    }
    /* 렌더링이 되고 나서 componentDidMount()가 실행된다. 
    그래서 title을 받아온 다음에 새로고침을 하면 에러가 발생함
    props를 안 받와왔으니 location도 없기 때문이다 */
    render() {
        const {location} = this.props
        /* 그래서 여기서 경우를 나눠줘야 함 */
        if (location.state) {
            return <span>{location.state.title}</span>
        } else {
            return null;
        }

    }
}

export default Detail