import styled from 'styled-components'
import fonts from './Fonts'
import colors from './Colors'

let ffamily = fonts.family,
    fweight = fonts.weights,
    fsize = fonts.sizes

export const H1 = styled.h1`
  font-family: ${ffamily.title};
  font-weight: ${fweight.semibold};
  font-size: ${fsize.title};
  color: ${colors.title};
  line-height: 1.2;
`

export const H2 = styled.h2`
  font-family: ${ffamily.title};
  font-weight: ${fweight.medium};
  font-size: ${fsize.title};
  color: ${colors.title};
  line-height: 1.2;
`

export const H3 = styled.h3`
  font-family: ${ffamily.title};
  font-weight: ${fweight.medium};
  font-size: ${fsize.mark};
  color: ${colors.highlight};
`

export const A = styled.a`
`

export const P = styled.p`
  font-family: ${ffamily.content};
  font-weight: ${fweight.regular};
  font-size: ${fsize.title};
  color: ${colors.content};
`

export const Mark = styled.mark`
  font-family: ${ffamily.content};
  font-weight: ${fweight.medium};
  font-size: ${fsize.mark};
  color: ${colors.highlight};
  text-transform: uppercase;
`

export const I = styled.i`
  color:${colors.highlight}
`