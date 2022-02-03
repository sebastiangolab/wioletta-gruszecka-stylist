import styled from "styled-components";

export const Wrapper = styled.div`
    display: none;

    @media (max-width: 991px) {
        font-size: 25px;
        font-weight: 300;
        background-color: ${({theme}) => theme.colors.primary};
        border-radius: 7px;
        margin-left: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 11px 20px 10px;
    }

    @media (max-width: 575px) {
        padding: 12px 20px 11px;
    }
`;
