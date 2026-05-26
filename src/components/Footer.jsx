import { Box, Flex, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box bg="#0f1219" px={{ base: 6, md: 12, lg: 20 }} py={10}>
      <Flex
        maxW="1200px"
        mx="auto"
        justify="space-between"
        align="center"
        direction={{ base: 'column', md: 'row' }}
        gap={4}
      >
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
          <Text fontSize="sm" color="whiteAlpha.600" mt={1}>
            Fresh breakfast delivered to your door
          </Text>
        </Box>

        <Text fontSize="xs" color="whiteAlpha.400">
          © 2026 Sunrise Kitchen. All rights reserved.
        </Text>
      </Flex>
    </Box>
  )
}

export default Footer
