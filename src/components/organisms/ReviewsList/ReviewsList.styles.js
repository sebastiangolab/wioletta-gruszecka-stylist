import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 45px 40px;
    padding-top: 5px;
    
    @media (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 30px;
    }
`;