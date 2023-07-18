export default function Image({ to, ...rest }){
  return(
    <img src={to} {...rest} />
  );
}