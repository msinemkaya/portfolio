import H1 from '../base/H1';

export default function MainHeading({ children }){
  return(
    <H1 className='text-center text-4xl font-bold mb-16'>
      {children}
    </H1>
  );
}