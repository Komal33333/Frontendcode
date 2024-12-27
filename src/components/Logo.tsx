import { Square } from 'lucide-react';

export const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="relative">
      <Square className="w-10 h-10 text-blue-500" strokeWidth={1.5} />
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-serif text-blue-500">
        A
      </span>
    </div>
    <span className="text-2xl font-bold text-blue-500">ARAN</span>
  </div>
);