import { Box } from '@chakra-ui/react';
import React from 'react'

export type WrapperSize = "regular" | "small"

interface WrapperProps {
  size?: WrapperSize;
}

export const Wrapper: React.FC<WrapperProps> = ({children, size}) => {
    return (
      <Box w="100%" mx="auto" maxW={ size === "regular" ? "800px" : "400px"} mt={8} >{children}</Box>
    );
}