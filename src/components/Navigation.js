import React from "react";
import {Link} from "react-router-dom"

function Navigation() {
    return (
    <div>
        <Link to="/Home">Home</Link>
        <Link to="About">About</Link>
    </div>
    )
    /* 근데 a 태그를 쓰면 React 답지 않게 누를 때마다 새로고침이 되어버림 4
    왜? 저건 그냥 Html 코드이기 때문이다. 저걸 누르면 React가 죽어버리고 그냥 새로운
    홈페이지가 생성됨 */
    /* 그래서 a태그 대신 Link 태그 사용 */

    /* Link 태그가 들어간 컴포넌트는 HashRouter 밖에서 사용할 수 없다.
    즉, Navigation 링크가 HashRouter 링크 밖으로 나가버리면 사용 불가능 */
}

export default Navigation