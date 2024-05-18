import { Container, Box, VStack, HStack, Text, Input, Button, Select, Image, IconButton } from "@chakra-ui/react";
import { FaBus, FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        {/* Header */}
        <Box w="100%" bg="blue.500" color="white" p={4} borderRadius="md">
          <HStack justifyContent="space-between">
            <Text fontSize="2xl" fontWeight="bold">
              Ghasedak24
            </Text>
            <HStack spacing={4}>
              <Button colorScheme="blue" variant="outline">
                Login
              </Button>
              <Button colorScheme="blue" variant="solid">
                Sign Up
              </Button>
            </HStack>
          </HStack>
        </Box>

        {/* Search Section */}
        <Box w="100%" p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
          <VStack spacing={4}>
            <HStack w="100%" spacing={4}>
              <Input placeholder="From" size="lg" />
              <Input placeholder="To" size="lg" />
              <Input type="date" size="lg" />
              <Button leftIcon={<FaSearch />} colorScheme="blue" size="lg">
                Search
              </Button>
            </HStack>
          </VStack>
        </Box>

        {/* Featured Buses */}
        <Box w="100%">
          <Text fontSize="2xl" mb={4}>
            Featured Buses
          </Text>
          <HStack spacing={4} overflowX="auto">
            {[1, 2, 3, 4].map((bus) => (
              <Box key={bus} w="250px" borderWidth="1px" borderRadius="md" overflow="hidden" boxShadow="md">
                <Image src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXN8ZW58MHx8fHwxNzE2MDM0NzUxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Bus" />
                <Box p={4}>
                  <Text fontSize="lg" fontWeight="bold">
                    Bus {bus}
                  </Text>
                  <Text>From: City A</Text>
                  <Text>To: City B</Text>
                  <Button mt={2} colorScheme="blue" size="sm">
                    Book Now
                  </Button>
                </Box>
              </Box>
            ))}
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
