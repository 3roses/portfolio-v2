import React from 'react'
import { useColorMode } from '@chakra-ui/react'
import { SunIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';


const ColorMode = () => {

    const { toggleColorMode } = useColorMode()

  return (
    <div className='colorMode'>
        <IconButton onClick={toggleColorMode}
            icon={<SunIcon />}
        />
    </div>
  )
}

export default ColorMode