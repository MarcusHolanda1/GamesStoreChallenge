import styled from "styled-components";

import Theme from "../../design/theme"

export const Container = styled.section`
    display: inline-block;

    padding-left: ${Theme.spacing.n5};
    padding-right: ${Theme.spacing.n5};
    padding-top: ${Theme.spacing.n3};
    width: 100%;
`

export const MyProducts = styled.div`

    border-bottom: 2px solid ${Theme.colors.border};
    padding-bottom: ${Theme.spacing.n2};
`

export const GamesBuy = styled.div`
    padding: 15px 0 15px 0;

    span {
        float: right;
        color: ${Theme.colors.primary};
        font-family: ${Theme.font.h4Buy.fontFamily};
        font-style: ${Theme.font.h4Buy.fontStyle};
        font-weight: ${Theme.font.h4Buy.fontWeight};
        font-size: ${Theme.font.h4Buy.fontSize};
        line-height: ${Theme.font.h4Buy.lineHeight};
    }
`
