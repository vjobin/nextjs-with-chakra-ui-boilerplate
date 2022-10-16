import { Flex, Heading, Img } from '@chakra-ui/react'
import GradientButton from 'components/Buttons/GradientButton'

export type HeroProps = {
  title?: string
}

const Hero = ({ title = 'NextJS with Chakra-ui Boilerplate' }: HeroProps) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    direction="column"
    height="100vh"
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
    maxWidth="80%"
  >
    <Img src="/img/chakra-logo.png" alt="Chakra-ui Logo" mr={4} />
    <Heading fontSize="6vw">{title}</Heading>
    <Flex maxWidth="100px">
      <GradientButton></GradientButton>
    </Flex>
  </Flex>
)

export default Hero
