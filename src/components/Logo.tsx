import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

const Logo: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" mb={2}>
      <Image src="/images/launcher.png" alt="Logo" width={80} height={80} />
    </Box>
  );
};

export default Logo;
