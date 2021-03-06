import styled from "styled-components";

import Theme from "../../design/theme"

export const Container = styled.section`
    display: inline-block;

    padding-left: ${Theme.spacing.n3};
    padding-right: ${Theme.spacing.n3};
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
        color: ${Theme.colors.text};
        font-family: ${Theme.font.p.fontFamily};
        font-style: ${Theme.font.p.fontStyle};
        font-weight: 900;
        font-size: ${Theme.font.p.fontSize};
        line-height: ${Theme.font.p.lineHeight};
    }

    .close {
        float: right;
        padding-left: ${Theme.spacing.n1}
    }
`
export const TotalBuy = styled.div`
    border-top: 2px solid ${Theme.colors.border};
    padding-top: ${Theme.spacing.n2};
    padding-bottom: ${Theme.spacing.n1};

    .Freight {
        color: ${Theme.colors.text};
        font-family: ${Theme.font.p.fontFamily};
        font-style: ${Theme.font.p.fontStyle};
        font-weight: 400;
        font-size: ${Theme.font.p.fontSize};
        line-height: ${Theme.font.p.lineHeight};
    }

    .priceFreight {
        float: right;
        color: ${Theme.colors.text};
        font-family: ${Theme.font.p.fontFamily};
        font-style: ${Theme.font.p.fontStyle};
        font-weight: 900;
        font-size: ${Theme.font.p.fontSize};
        line-height: ${Theme.font.p.lineHeight};
        
    }

    .totalPrice{
        float: right;
        color: ${Theme.colors.primary};
        font-family: ${Theme.font.h4Buy.fontFamily};
        font-style: ${Theme.font.h4Buy.fontStyle};
        font-weight: 900;
        font-size: ${Theme.font.h4Buy.fontSize};
        line-height: ${Theme.font.h4Buy.lineHeight};
    }

    h4{
        padding-top: ${Theme.spacing.n1};
    }
`

export const SpaceButton = styled.div`
    padding: ${Theme.spacing.n2};
`

export const ContainerButton = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
`