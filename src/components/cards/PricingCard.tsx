import { Box, Button, List, ListIcon, ListItem, Tag, Text, chakra } from "@chakra-ui/react"
import { BsCheck2Square } from "react-icons/bs";

interface PricingCardProps {
  cardHeader: string;
  showtag: boolean;
}

const pricing = ({cardHeader, showtag = false} : PricingCardProps) => {
  return (
    <Box
      boxShadow={"0px 2px 18px rgba(0, 0, 0, 0.1)"}
      fontFamily={"Inconsolata"}
      fontSize={"16px"}
      w={{
        base: "330px",
        md: "290px",
      }}
      h={"600px"}
      color={"black"}
      _hover={{
        border: "1px solid #3CCF8E",
        h: "551px",
        transform: "translateY(-10px)",
      }}
      
    >
       <Box
          mb={"4px"}
          mx={"0"}
          p={"4"}
          w={"100%"}
          bg={"#FAFAFA"}
          h={"60px"}
        >
          <Text
          fontSize={"16px"}
          fontWeight={700}
          lineHeight={"24px"}
          textAlign={"center"}
          textTransform={"capitalize"}
          color={"#000000"}
          >
          {cardHeader}
          </Text>
        </Box>
      <Box
        m={"15.61%"}
        my={"12.04%"}
      >
       { showtag && (
         <Tag 
         mx={"41px"}
          w={"120px"}
          bg={"#FFB34B"}
          borderRadius={"50px"}
          h={"20px"}
         >Recommended
         </Tag>
       )}
        <chakra.span> $</chakra.span>
        <chakra.span
          fontSize={"26px"}
          fontWeight={700}
        >0.35</chakra.span>
        <chakra.span>/verification</chakra.span>
      </Box>
      <Box
        m={"17.61%"}
        my={"15.04%"}
      >
        <List spacing={3}>
          <ListItem>
            <ListIcon as={BsCheck2Square} color="#3CCF8E" />
            Document Number
          </ListItem>
          <ListItem>
            <ListIcon as={BsCheck2Square} color="#3CCF8E" />
            Document Serial #
          </ListItem>
          <ListItem>
            <ListIcon as={BsCheck2Square} color="#3CCF8E" />
            Holder's First Last Name
          </ListItem>
          <ListItem>
            <ListIcon as={BsCheck2Square} color="#3CCF8E" />
            Holder's Other name(s)
          </ListItem>
          <ListItem>
            <ListIcon as={BsCheck2Square} color="#3CCF8E" />
            Holder's Date of Birth
          </ListItem>
          <ListItem>
            <ListIcon as={BsCheck2Square} color="#3CCF8E" />
            Holder's Gender
          </ListItem>
        </List>
       
        <Button
          mt={"12"}
          w={"215px"}
          h={"50px"}
          bg={"#FFFFFF"}
          border={"1px solid #8F8A8A"}
          borderRadius={"2px"}
          _focus={{
            bg: "#1053E3",
        }}
        >
          Start Today
        </Button>
      </Box>
    </Box>

  )
}

export default pricing
