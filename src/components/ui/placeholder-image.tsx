
interface PlaceholderImageProps {
  width: number;
  height: number;
  text: string;
  gradient?: string;
  className?: string;
}

export function PlaceholderImage({ 
  width, 
  height, 
  text, 
  gradient = "from-blue-600 to-emerald-600",
  className = ""
}: PlaceholderImageProps) {
  return (
    <div 
      className={`flex items-center justify-center bg-gradient-to-br ${gradient} text-white font-bold text-center p-4 ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <span className="text-shadow">{text}</span>
    </div>
  );
}
