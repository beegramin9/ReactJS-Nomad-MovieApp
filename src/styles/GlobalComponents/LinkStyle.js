import styled from "styled-components"
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit; // 지려버림

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    &:active {
        background-color: rgba(34, 34, 34, .7);
        transform: scale(1.3);
        cursor: pointer;
    }

`