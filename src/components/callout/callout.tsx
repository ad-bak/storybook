import { PropsWithChildren } from 'react';
import { CalloutVariants, variants } from './callout-variants';

type CalloutProps = PropsWithChildren<CalloutVariants & { title: string }>;
export const Callout = ({ children, title, variant }: CalloutProps) => {
  return (
    <div className={variants({ variant })}>
      <h2 className="text-5xl font-semibold">{title}</h2>
      <p>{children} </p>
    </div>
  );
};
