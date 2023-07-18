import FlexBox from 'components/base/FlexBox';

export default function CardFlexBox({ children }){
  return(
    <FlexBox className='flex-col gap-6 lg:h-[50vh] md:!items-start px-4 w-full justify-center flex-1'>
      {children}
    </FlexBox>
  );
}