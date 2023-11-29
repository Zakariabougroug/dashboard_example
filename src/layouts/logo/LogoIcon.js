import React from 'react';
import { Link } from '@mui/material';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import LogoDark from '../../../assets/images/logos/evvent_logo_pink_bg.svg';
import LogoLight from '../../../assets/images/logos/evvent_whitefont_whiteborder.svg';

const LogoIcon = () => {
  const customizer = useSelector((state) => state.CustomizerReducer);
  return (
    <Link href="/">
      {customizer.activeMode === 'dark' ? (
        <Image src={LogoLight} alt={LogoLight} />
      ) : (
        <Image src={LogoDark} alt={LogoDark} />
      )}
    </Link>
  );
};

export default LogoIcon;
