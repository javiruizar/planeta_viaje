// src/components/mdx/CalloutBox.tsx
// Componente para destacar información en contenido MDX

import React from 'react';
import { CalloutBoxProps } from '@/types/mdx';

const CalloutBox: React.FC<CalloutBoxProps> = ({ 
  type = 'info', 
  title, 
  text 
}) => {
  const getStyles = () => {
    const baseStyles = "p-4 rounded-lg border-l-4 my-6";
    
    switch (type) {
      case 'warning':
        return `${baseStyles} bg-yellow-50 border-yellow-400 text-yellow-800`;
      case 'tip':
        return `${baseStyles} bg-green-50 border-green-400 text-green-800`;
      case 'note':
        return `${baseStyles} bg-blue-50 border-blue-400 text-blue-800`;
      case 'danger': 
        return `${baseStyles} bg-red-50 border-red-400 text-red-800`;
      default:
        // default is info
        return `${baseStyles} bg-gray-50 border-gray-400 text-gray-800`;
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'warning':
        return '⚠️';
      case 'tip':
        return '💡';
      case 'note':
        return '📝';
      case 'info':
      default:
        return 'ℹ️';
    }
  };

  return (
    <div className={getStyles()}>
      <div className="flex items-start">
        <span className="text-xl mr-3 mt-1">{getIcon()}</span>
        <div className="flex-1">
          {title && (
            <h4 className="font-semibold mb-2">{title}</h4>
          )}
          <div className="prose prose-sm max-w-none">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalloutBox; 