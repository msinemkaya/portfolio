import classNames from 'classnames';

export default function Container({ className, children, ...rest }){

  const finalClasses = classNames('', className)

  return(
    <div className={finalClasses} {...rest}>
      {children}
    </div>
  );
}