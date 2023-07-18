import H2 from 'components/base/H2';
import Legend from 'components/base/Legend';


export default function CardHeading({ children, click, ...rest }){
  return(
    <>
      {click ? (
        <Legend {...rest} className='text-center md:text-left'>
          <H2 className='font-extrabold text-3xl whitespace-nowrap text-indigo-400/90 swing cursor-pointer inline-block'>
            &lt; {children} &gt;
          </H2>
        </Legend>
      ) : (
        <H2 {...rest} className='font-extrabold text-3xl whitespace-nowrap text-indigo-400/90 swing cursor-pointer inline-block'>
          &lt; {children} &gt;
        </H2>
      )}
    </>
  );
}