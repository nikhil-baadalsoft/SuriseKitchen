import { Box, Flex, Text, Heading, Button } from '@chakra-ui/react'

const Offer = ({captureEvent}) => {
  return (
    <Box
      bg="#1A1F2E"
      px={{ base: 6, md: 12, lg: 20 }}
      py={{ base: 16, md: 24 }}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        align="center"
        gap={{ base: 10, md: 16 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Box flex={1}>
          <Text
            fontSize="xs"
            fontWeight="800"
            color="#E8501A"
            letterSpacing="widest"
            textTransform="uppercase"
            mb={4}
          >
            Limited Time Offer
          </Text>

          <Heading
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="900"
            color="white"
            lineHeight="1.1"
            mb={5}
          >
            Get 20% off your
            <br />
            first online order.
          </Heading>

          <Text
            fontSize="md"
            color="whiteAlpha.700"
            lineHeight="1.7"
            maxW="400px"
          >
            Continue to our secure ordering platform for checkout and
            payment. Fresh food, fast delivery, unbeatable prices.
          </Text>
        </Box>

        <Box flex={1} maxW={{ base: '100%', md: '420px' }} w="100%">
          <Box
            bg="white"
            borderRadius="2xl"
            p={8}
            boxShadow="2xl"
          >
            <Heading
              fontSize="xl"
              fontWeight="800"
              color="#1A1A1A"
              mb={3}
            >
              Start your order today
            </Heading>

            <Text fontSize="sm" color="gray.500" mb={7} lineHeight="1.6">
              Continue to the ordering application with session tracking
              enabled. Enjoy fresh meals delivered right to your door.
            </Text>

            <Button
              bg="#E8501A"
              color="white"
              w="100%"
              borderRadius="xl"
              py={6}
              fontSize="sm"
              fontWeight="700"
              _hover={{ bg: '#CB4617', transform: 'translateY(-2px)', boxShadow: 'xl' }}
              transition="all 0.2s"
              onClick={() =>{captureEvent("Continue to Ordering Site")}}
            >
              Continue to Ordering Site
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Offer
