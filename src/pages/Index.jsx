import { Box, Container, Flex, Heading, Text, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="white" p={4} boxShadow="md" justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to="/">Brand</Link>
        </Heading>
        <Flex>
          <Link as={RouterLink} to="/" p={2} mx={2}>Home</Link>
          <Link as={RouterLink} to="/about" p={2} mx={2}>About</Link>
          <Link as={RouterLink} to="/services" p={2} mx={2}>Services</Link>
          <Link as={RouterLink} to="/contact" p={2} mx={2}>Contact</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box
        height="60vh"
        backgroundImage="url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
      >
        <VStack spacing={4} bg="rgba(0, 0, 0, 0.5)" p={8} borderRadius="md">
          <Heading as="h2" size="2xl">Welcome to Our Website</Heading>
          <Text fontSize="xl">We are glad to have you here. Explore our services and get to know more about us.</Text>
        </VStack>
      </Box>

      {/* About Section */}
      <Container maxW="container.md" py={16}>
        <Heading as="h3" size="xl" mb={4}>About Us</Heading>
        <Text fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </Text>
      </Container>

      {/* Services Section */}
      <Container maxW="container.md" py={16}>
        <Heading as="h3" size="xl" mb={4}>Our Services</Heading>
        <Text fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </Text>
      </Container>

      {/* Contact Section */}
      <Container maxW="container.md" py={16}>
        <Heading as="h3" size="xl" mb={4}>Contact Us</Heading>
        <Text fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </Text>
      </Container>
    </Box>
  );
};

export default Index;