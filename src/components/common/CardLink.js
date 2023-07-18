import A from 'components/base/A';

export default function CardLink({ children, to }){
  return(
    <A to={to} className='block cursor-pointer' target='_blank'>
      {children}
    </A>
  );
}