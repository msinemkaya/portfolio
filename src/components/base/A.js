export default function A({ children, className, to, ...rest }){
  return(
    <a href={to} className={className} {...rest}>
      {children}
    </a>
  );
}