import {forwardRef} from 'react';
import {Link} from '@remix-run/react';
import clsx from 'clsx';

import {missingClass} from '~/lib/utils';

export const Button = forwardRef(
  (
    {
      as = 'button',
      className = '',
      variant = 'primary',
      width = 'auto',
      ...props
    },
    ref,
  ) => {
    const Component = props?.to ? Link : as;

    const baseButtonClasses =
      'inline-block rounded-2xl md:rounded-full font-bold text-center py-1.5 md:py-3 px-3 md:px-6';

    const variants = {
      primary: `${baseButtonClasses} bg-primary text-contrast`,
      dark: `${baseButtonClasses} bg-contrast text-primary border-2 border-contrast hover:bg-white hover:text-contrast transition`,
      secondary: `${baseButtonClasses} border-2 border-primary bg-contrast text-primary hover:bg-white hover:text-contrast hover:border-white`,
      inline: 'border-b border-primary/10 leading-none pb-1',
    };

    const widths = {
      auto: 'w-auto',
      full: 'w-full',
    };

    const styles = clsx(
      missingClass(className, 'bg-') && variants[variant],
      missingClass(className, 'w-') && widths[width],
      className,
    );

    return (
      <Component
        // @todo: not supported until react-router makes it into Remix.
        // preventScrollReset={true}
        className={styles}
        {...props}
        ref={ref}
      />
    );
  },
);
