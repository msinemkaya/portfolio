export default function H2({ className, children, ...rest }){
  return(
    <h1 className={className} {...rest}>
      {children}
    </h1>
  );
}