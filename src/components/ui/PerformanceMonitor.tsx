import React, { useEffect, useState } from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

/**
 * Performance Monitor Component
 * Monitors component render performance and displays warnings
 * for potential performance issues
 */
interface PerformanceMonitorProps {
  componentName: string;
  threshold?: number; // milliseconds
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  componentName, 
  threshold = 100 
}) => {
  const [renderTime, setRenderTime] = useState<number>(0);
  const [isSlowRender, setIsSlowRender] = useState(false);
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      setRenderTime(duration);
      setIsSlowRender(duration > threshold);
      setRenderCount(prev => prev + 1);
      
      if (duration > threshold) {
        console.warn(`Slow render detected in ${componentName}: ${duration.toFixed(2)}ms`);
      }
    };
  });

  // Only show in development mode
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-lg text-xs">
      <div className="flex items-center gap-2 mb-1">
        {isSlowRender ? (
          <AlertTriangle className="w-4 h-4 text-orange-500" />
        ) : (
          <CheckCircle className="w-4 h-4 text-green-500" />
        )}
        <span className="font-medium">{componentName}</span>
      </div>
      <div className="text-gray-600 dark:text-gray-400">
        <div>Render: {renderTime.toFixed(2)}ms</div>
        <div>Count: {renderCount}</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;