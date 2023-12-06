import styled from "styled-components";

export const HeaderWrapper = styled.header`
    background-color: #009EE4;

    @media screen and (max-width: 590px) {
        display: none;
    }
`
export const HeaderNav = styled.nav`
    max-width: 1178px;
    margin: 0 auto;
    padding: 0 10px;
    height: 79px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: end;
`

export const HeaderButton = styled.button`
    width: 224px;
    height: 40px;
    border: 1px solid #FFFFFF;
    border-radius: 6px;
    background-color: transparent;
    color: #FFFFFF;
    font-size: 16px;
    line-height: 1;

    &:hover {
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid #FFFFFF;
    }
`