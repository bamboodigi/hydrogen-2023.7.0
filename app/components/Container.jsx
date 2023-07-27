import clsx from 'clsx'

const paddings = '';

var styles = "";

export function Container({ className, padding, ...props }) {

  if(padding === "x") {
    styles= paddings;
  }
  return (
    <div
      className={clsx(className,'mx-auto max-w-screen-2xxl px-4 sm:px-6 lg:px-8', styles)}
      {...props}
    />
  )
}
