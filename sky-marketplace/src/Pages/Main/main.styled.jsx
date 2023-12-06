import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F1F1F1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
`

export const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: #FFFFFF;

`

export const MainContainer = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 52px 10px 37px;

    @media screen and (max-width: 590px) {
        padding: 85px 10px 84px;
    }
`

export const MainH2 = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 42px;
    color: #000000;
    margin-bottom: 30px;

    &:hover::before {
        border-top: 2px solid #0080C1;
        border-left: 2px solid #0080C1;
    }

    @media screen and (max-width: 590px) {
        font-size: 24px;
        line-height: 29px;
        color: #000000;
        margin-bottom: 20px;
        text-align: center;
        position: relative;

        &::before {
            content: "";
            display: block;
            width: 12px;
            height: 12px;
            background-color: transparent;
            border-top: 2px solid #000000;
            border-left: 2px solid #000000;
            -webkit-transform: rotate(-45deg);
                    transform: rotate(-45deg);
            position: absolute;
            top: 9px;
            left: 13px;
            cursor: pointer;
        }
    }
`

export const MainContent = styled.div`
    width: 100%;
    height: 70vh;
    overflow: auto;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 26px;
    row-gap: 40px;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE и Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
    display: none;
    }

    @media screen and (max-width: 590px) {
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        position: fixed;
        right: 0;
        left: 0;
        top: 134px;
        bottom: 84px;
    }
`