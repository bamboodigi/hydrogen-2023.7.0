import clsx from 'clsx'

const paddings = 'px-4';

var styles = "";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Container({ className, container, padding, no_max, ...props }) {
  container = container || false;
  styles = "";
  if(padding !== "y") {
    styles= paddings;
  }
  return (
    <div
      className={classNames(
        container == "collection" ? "max-w-screen-2xl" : "",
        no_max ? "" : "max-w-screen-2xxl",
        className,'mx-auto sm:px-6 lg:px-8', styles
      )}
      {...props}
    />
  )
}
