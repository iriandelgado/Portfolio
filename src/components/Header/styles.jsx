import styled from 'styled-components';

export const Container = styled.div`
    background-color: #C4C4C4;
    position:fixed;
    margin:0;
    top:0;
    left:0;
    right:0;

    .header-box{
        display:flex;
        justify-content: space-between;
        max-width: 800px;
        height: 42px; 
        margin 0 auto;
        align-items: center;
        
    }

    h1{
        font-weight: bold;
        font-size: 20px;
        border-bottom: 5px solid black;
        cursor:pointer;
        
    }

    nav ul{
        display:flex;

    }

    ul li {
        margin-left: 21px;
        font-weight: bold;
    }
`;
