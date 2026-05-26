import { Box, Flex, Text, Button } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box
      position="sticky"
      top={0}
      zIndex={100}
      bg="white"
      boxShadow="sm"
      px={{ base: 6, md: 12, lg: 20 }}
      py={4}
    >
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Box>
          <Text
            fontSize="xs"
            fontWeight="700"
            color="#E8501A"
            letterSpacing="widest"
            textTransform="uppercase"
          >
            Sunrise Kitchen
          </Text>
          <Text fontSize="lg" fontWeight="800" color="#1A1A1A" lineHeight="1.2">
            Restaurant Marketing Site
          </Text>
        </Box>

        <Button
          bg="#E8501A"
          color="white"
          borderRadius="full"
          px={7}
          py={5}
          fontSize="sm"
          fontWeight="700"
          _hover={{ bg: '#c94415', transform: 'translateY(-1px)', boxShadow: 'lg' }}
          transition="all 0.2s"

          onClick={() => window.open("https://ordering-app-poc.netlify.app/", "_blank")}
        >
          Order Now
        </Button>
      </Flex>
    </Box>
  )
}

export default Navbar
