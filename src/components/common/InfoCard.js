import Container from 'components/base/Container';
import CardHeading from './CardHeadig';
import { useState } from 'react';
import Fieldset from 'components/base/Fieldset';


export default function InfoCard({ title, children }){

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click);
  }

  return(
    <Fieldset className={`${click && 'border-4 border-indigo-400/70 border-dotted'} px-4 md:w-full max-w-[20rem] md:max-h-40 lg:max-h-full md:overflow-auto lg:overflow-visible mx-auto`}>
      <CardHeading onClick={handleClick} click={click}>{title}</CardHeading>
      <Container className={` ${click ? ' p-4 opacity-100 scale-100' : 'scale-0 opacity-0 h-0 w-0'} origin-top font-vt323 text-xl transition-all duration-300`}>{children}</Container>
    </Fieldset>
  );
}