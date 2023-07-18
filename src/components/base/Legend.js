export default function Legend({ children, ...rest }){
  return(
    <legend  {...rest}>
      {children}
    </legend>
  );
}