import { useColorModeValue } from '@/components/ui/color-mode'
import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  })
  const handleAddProduct = () => {
    // Add product to the database or state management
    console.log(newProduct)
  }
  return (
    <Container  maxW={"container.sm"} >
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} mb={8} textAlign={"center"}>Create New Product</Heading>

        <Box w={'full'} bg={useColorModeValue("gray.200", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>

          <VStack spacing={5} >
            <Input type="text" placeholder='Product Name' name='name' value={newProduct.name} onChange={(e)=> setNewProduct({...newProduct,name: e.target.value})}/>

            <Input type="number" placeholder='Product Price' name='price' value={newProduct.price} onChange={(e)=> setNewProduct({...newProduct,price: e.target.value})}/>

            <Input  placeholder='Product Image URL' name='image' value={newProduct.image} onChange={(e)=> setNewProduct({...newProduct,image: e.target.value})}/>

            <Button colorScheme ='blue' onClick={handleAddProduct} w={'full'}>Add Product</Button>
          </VStack>

        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage
