import { Box, Flex, Text, Button, HStack } from '@chakra-ui/react'
 
const Navbar = ({ captureEvent }) => {
  const sessionId = sessionStorage.getItem("sessionId")
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
      <Flex align="center" maxW="1200px" mx="auto">
        <Box minW="220px">
          <Text
            fontSize="xs"
            fontWeight="700"
            color="#E8501A"
            letterSpacing="widest"
            textTransform="uppercase"
          >
            Sunrise Bagels
          </Text>
 
          <Text
            fontSize="lg"
            fontWeight="800"
            color="#1A1A1A"
            lineHeight="1.2"
          >
            Restaurant Marketing Site
          </Text>
        </Box>
 
        <HStack
          gap="40px"
          flex={1}
          justifyContent="center"
          display={{ base: 'none', md: 'flex' }}
        >
          <Text
            fontSize="sm"
            fontWeight="600"
            color="#1A1A1A"
            cursor="pointer"
            _hover={{ color: '#CB4617' }}
          >
            Menu
          </Text>
 
          <Text
            fontSize="sm"
            fontWeight="600"
            color="#1A1A1A"
            cursor="pointer"
            _hover={{ color: '#CB4617' }}
          >
            Rewards
          </Text>
 
          <Text
            fontSize="sm"
            fontWeight="600"
            color="#1A1A1A"
            cursor="pointer"
            _hover={{ color: '#CB4617' }}
            onClick={() => window.open(`https://sunrisebagels-catering.vercel.app/?sessionId=${sessionId}`, "_blank")}>
            Catering
          </Text>
        </HStack>
 
        <Box minW="220px" display="flex" justifyContent="flex-end">
          <Button
            bg="#E8501A"
            color="white"
            borderRadius="full"
            px={7}
            py={5}
            fontSize="sm"
            fontWeight="700"
            _hover={{
              bg: '#CB4617',
              transform: 'translateY(-1px)',
              boxShadow: 'lg',
            }}
            transition="all 0.2s"
            onClick={() => {
              captureEvent('MARKETING_ORDER_NOW_CLICKED',2)
            }}
          >
            Order Now
          </Button>
        </Box>
 
      </Flex>
    </Box>
  )
}
 
export default Navbar