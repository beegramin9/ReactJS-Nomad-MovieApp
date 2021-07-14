import React from "react";
import { HeaderContainer, Div1, Div2, Div3, Span ,SocialIcons} from "./HeaderStyle";
import { StyledLink } from "../../styles/GlobalComponents/LinkStyle";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { RiMovie2Fill } from 'react-icons/ri';

// 세로에 넣자
function Header() {
    /* Navigation을 만들기 위해 html의 <a>을 사용하면, <a>는 새로고침으로 새 페이지로 
    이동하기 떄문에 이동할 때마다 React가 죽는다. 그렇기에 React의 Link를 사용한다 */
    return (
        <HeaderContainer>
            <Div1>
                <StyledLink to="/Home">
                    <a style={{ display: "flex", alignItems: "center", color:'white', marginBottom:"20px"}}>
                        <RiMovie2Fill size="3rem"/>
                    </a>
                </StyledLink>
                <Span>MovieFlix</Span>
            </Div1>
            <Div2>
                <StyledLink to="/About">
                    <Span>About</Span>
                </StyledLink>
                <StyledLink to="/Home">
                    <Span>Home</Span>
                </StyledLink>
            </Div2>
            {/* React 라우터에 의해 주어진 props를 이용해서
            각각 Movie 카드를 클릭하면 Movie 디테일을 들고 다른 페이지로 갈 수 있도록 */}
            {/* to의 path를 object로 교체할 수 있다. 주로 state에 추가 정보를 보낼 때 사용한다.
            다시 말하면, jQuery로 /about&id=1?bid=2019처럼 정보가 보이지 않고 숨겨서 보낼 수 있다.*/}
            <StyledLink to={{
                pathname: "/movie",
                state: {
                    fromNavigation : true
                }
            }}></StyledLink>
        </HeaderContainer>
        )

    /* Link 태그가 들어간 컴포넌트는 HashRouter 밖에서 사용할 수 없다.
    즉, Navigation 링크가 HashRouter 링크 밖으로 나가버리면 사용 불가능 */
}

export default Header