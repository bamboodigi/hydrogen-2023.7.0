import clsx from 'clsx'

const paddings = '';

var styles = "";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Container({ className, container, padding, ...props }) {
  console.log(container)
  container = container || false;
  if(padding === "x") {
    styles= paddings;
  }
  return (
    <div
      className={classNames(
        container == "collection" ? "max-w-screen-2xl" : "max-w-screen-2xxl",
        className,'mx-auto px-4 sm:px-6 lg:px-8', styles
      )}
      {...props}
    />
  )
}
