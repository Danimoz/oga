import { cn } from '../../lib/utils';

interface HeaderProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
}

export default function Header({ variant = 'h1', children, className }: HeaderProps) {
  const Tag = variant;
  return (
    <Tag 
      className={className}
    >
      {children}
    </Tag>);
}