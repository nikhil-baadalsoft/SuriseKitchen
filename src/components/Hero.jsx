import { Box, Flex, Text, Heading, Button, Image } from '@chakra-ui/react'

const Hero = ({captureEvent}) => {
  return (
    <Box
      bg="linear-gradient(135deg, #FFF8F3 0%, #ffffff 60%)"
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
            Breakfast Specials Available
          </Text>

          <Heading
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="900"
            color="#1A1A1A"
            lineHeight="1.1"
            mb={5}
          >
            Fresh breakfast
            <br />
            delivered to your
            <br />
            door.
          </Heading>

          <Text
            fontSize="md"
            color="gray.500"
            mb={8}
            maxW="420px"
            lineHeight="1.7"
          >
            Explore premium breakfast meals, fresh coffee, and exclusive
            online offers — delivered hot to your door every morning.
          </Text>

          <Flex gap={4} wrap="wrap">
            <Button
              bg="#E8501A"
              color="white"
              borderRadius="full"
              px={8}
              py={6}
              fontSize="sm"
              fontWeight="700"
              _hover={{ bg: '#CB4617', transform: 'translateY(-2px)', boxShadow: 'xl' }}
              transition="all 0.2s"
              onClick={() => {captureEvent("MARKETING_START_ORDERING",2)}}
            >
              Start Ordering
            </Button>
            <Button
              variant="outline"
              borderColor="#1A1A1A"
              color="#1A1A1A"
              borderRadius="full"
              px={8}
              py={6}
              fontSize="sm"
              fontWeight="700"
              _hover={{ bg: '#1A1A1A', color: 'white', transform: 'translateY(-2px)' }}
              transition="all 0.2s"
              onClick={() => {captureEvent("MARKETING_EVENT_MENU",2)}}

            >
              Explore Menu
            </Button>
          </Flex>
        </Box>

        <Box flex={1} maxW={{ base: '100%', md: '520px' }}>
          <Image
            src="https://www.einsteinbros.com/wp-content/uploads/2026/05/EBB_Web_Mobile_800x800.png"
            alt="Fresh breakfast dishes"
            borderRadius="2xl"
            w="100%"
            h={{ base: '280px', md: '420px' }}
            objectFit="cover"
            boxShadow="2xl"
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default Hero
