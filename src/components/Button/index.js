export default function Button({ className, size, type, children, ...props }) {
  const style = {
    primary: "bg-blue-700 hover:bg-blue-800",
    warning: "bg-yellow-500 hover:bg-orange-400",
    danger: "bg-red-500 hover:bg-red-600",
  };

  const sizes = {
    sm: "py-2 px-3 text-sm",
    md: "py-2 px-4",
    lg: "py-3 px-5 text-lg",
  };

  return (
    <button
      className={`text rounded-lg text-white font-bold shadow 
      ${sizes[size || "md"]} ${style[type || "primary"]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
