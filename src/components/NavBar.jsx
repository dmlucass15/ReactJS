import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, Box, Spacer

} from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
return (
    <div>
<Flex>
<Box p='4' bg='red.400'>
        < Link to= {"/"}>
            <h3>Lucas Fitness</h3>
        </Link>
</Box>
<Spacer />
<Box p='4' bg='green.400'>
    <Menu>
        <MenuButton>
            Categories
        </MenuButton>
            <MenuList>
                <MenuItem>
                        < Link to= {`/categoria/${"A"}`}>
                        PLANES
                        </Link>
                </MenuItem>
                <MenuItem>
                        < Link to= {`/categoria/${"B"}`}>
                        CREATINAS
                        </Link>
                </MenuItem>
                <MenuItem> 
                        < Link to= {`/categoria/${"C"}`}>
                        PROTEINAS
                        </Link>
                </MenuItem>
            </MenuList>
        </Menu>
    </Box>
    <Spacer />
    <Box p='4' bg= 'yellow'>
        < Link to= {"/cart"}>
            <CartWidget/>
        </Link>
    </Box>
</Flex>
</div>
)
}

export default NavBar