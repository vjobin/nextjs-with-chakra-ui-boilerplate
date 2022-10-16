import { Button } from '@chakra-ui/react'
const GradientButton = () => {
  return (
    <Button
      fontSize="1rem"
      fontWeight={700}
      px="18px"
      height="30px"
      color="green.300"
      _hover={{ bg: 'red' }}
    >
      patate
    </Button>
  )
}
GradientButton.defaultProps = {
  variant: 'primary'
}
export default GradientButton
