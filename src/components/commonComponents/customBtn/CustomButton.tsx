import React from "react";

interface MyButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  isLoading?: boolean | undefined;
  children?: React.ReactNode;
}

const CustomButton: React.FC<MyButtonProps> = ({
  onClick,
  className,
  isLoading,
  children
}) => {
  return (
    <button onClick={onClick} className={className} disabled={isLoading}>
      {children}
    </button>
  );
};

export default CustomButton;
