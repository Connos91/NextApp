import React from "react";

interface MyButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children?: React.ReactNode;
}

const CustomButton: React.FC<MyButtonProps> = ({
  onClick,
  className,
  children
}) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default CustomButton;
