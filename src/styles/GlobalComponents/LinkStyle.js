import styled from "styled-components"
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit; // 지려버림
    width: auto;

    /* 웹앱 롱탭(=롱터치) Clipboard 현상 막기 */
    -webkit-touch-callout:none;
    // 롱탭 팝업/링크 연동 막기
    -webkit-touch-select:none; 
    // 복사 막기
    -webkit-user-select:none; 
    // 텍스트/이미지 선택 불가 => 확대 불가
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
    // 롱탭 파란색으로 하이라이트되는 것 막기

    -ms-user-select:none; 
    -moz-user-select:none; 
    -webkit-user-select:none; 
    -user-select:none; 

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    &:active {
        transform: scale(1.05);
        cursor: pointer;

    }

`