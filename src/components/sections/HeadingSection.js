import MainHeading from 'components/common/MainHeading';
import Span from 'components/base/Span';
import A from 'components/base/A';

export default function HeadingSection(){
  return(
    <MainHeading>
      hey! my name is&nbsp;
      <A to='https://github.com/msinemkaya' target='_blank'>
        <Span className='font-vt323 font-thin animate-bounce inline-block decoration-wavy underline decoration-2 decoration-transparent hover:decoration-indigo-400/70 transition-all duration-300'>Melike</Span>
      </A>
    </MainHeading>
  );
}