import { ComponentProps } from 'react';

import styles from './button.module.css';
import clsx from 'clsx';

export type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'small' | 'medium' | 'large';
};

export const Button = ({
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}: ButtonProps) => {
  const classes = clsx(styles.button, styles[variant], styles[size], className);

  return <button className={classes} {...props} />;
};
