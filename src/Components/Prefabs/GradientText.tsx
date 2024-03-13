const GradientText: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <span
    style={{
      backgroundImage: "linear-gradient(to right, cyan, magenta)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    {children}
  </span>
);

export default GradientText;