import { Box, Flex, Text, Heading, Button, Image, Badge, SimpleGrid } from '@chakra-ui/react'
import { menuItems } from './menuItems'

const FoodCard = ({ item }) => {
  return (
    <Box
      bg="white"
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="sm"
      border="1px solid"
      borderColor="gray.100"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-8px)', boxShadow: '2xl' }}
      cursor="pointer"
    >
      <Box position="relative">
        <Image
          src={item.image}
          alt={item.name}
          w="100%"
          h="220px"
          objectFit="cover"
          fallbackSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80"
        />
        {item.badge && (
          <Badge
            position="absolute"
            top={3}
            left={3}
            bg="#E8501A"
            color="white"
            px={3}
            py={1}
            borderRadius="md"
            fontSize="xs"
            fontWeight="800"
          >
            {item.badge}
          </Badge>
        )}
      </Box>

      <Box p={5}>
        <Flex justify="space-between" align="center" mb={2}>
          <Text fontWeight="800" fontSize="lg" color="#1A1A1A">
            {item.name}
          </Text>
          <Text fontWeight="800" fontSize="lg" color="#E8501A">
            ${item.price.toFixed(2)}
          </Text>
        </Flex>

        <Text fontSize="sm" color="gray.500" mb={5} lineHeight="1.6">
          {item.description}
        </Text>

        <Button
          bg="#1A1F2E"
          color="white"
          w="100%"
          borderRadius="xl"
          py={5}
          fontSize="sm"
          fontWeight="700"
          _hover={{ bg: '#2d3548', transform: 'translateY(-1px)' }}
          transition="all 0.2s"
        >
          Order This Item
        </Button>
      </Box>
    </Box>
  )
}

const PopularPicks = () => {
  const popularItems = menuItems.slice(0, 3)

  return (
    <Box
      bg="#F8F8F8"
      px={{ base: 6, md: 12, lg: 20 }}
      py={{ base: 16, md: 24 }}
    >
      <Box maxW="1200px" mx="auto">
        <Flex justify="space-between" align="center" mb={12}>
          <Heading
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight="900"
            color="#1A1A1A"
          >
            Popular breakfast picks
          </Heading>
          <Button
            variant="outline"
            borderColor="#1A1A1A"
            color="#1A1A1A"
            borderRadius="full"
            px={6}
            py={5}
            fontSize="sm"
            fontWeight="700"
            _hover={{ bg: '#1A1A1A', color: 'white' }}
            transition="all 0.2s"
            display={{ base: 'none', md: 'flex' }}
          >
            View Full Menu
          </Button>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {popularItems.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </SimpleGrid>

        <Flex justify="center" mt={8} display={{ base: 'flex', md: 'none' }}>
          <Button
            variant="outline"
            borderColor="#1A1A1A"
            color="#1A1A1A"
            borderRadius="full"
            px={8}
            py={5}
            fontSize="sm"
            fontWeight="700"
            _hover={{ bg: '#1A1A1A', color: 'white' }}
          >
            View Full Menu
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default PopularPicks
