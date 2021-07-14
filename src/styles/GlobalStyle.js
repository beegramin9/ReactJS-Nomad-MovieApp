import { createGlobalStyle } from "styled-components";

/* Component가 아닌 애들의 스타일 */
export const GlobalStyle = createGlobalStyle`
    body {
    padding: 0;
    margin: 0;
    background: linear-gradient(
        to right,
        rgba(20, 20, 20, 0.1) 10%,
        rgba(20, 20, 20, 0.7) 70%,
        rgba(20, 20, 20, 1)
    ),
    url(https://source.unsplash.com/random/1920x1080);
    background-size: cover;
    color: #2c2c2c;
    font-size: 12px;
    font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    }
`