import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  type = 'default',
  isMobile = false 
}) {
  const formatValue = (val) => {
    if (typeof val === 'number') {
      return val.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
    }
    return val;
  };

  const getTypeStyles = () => {
    switch (type) {
      case 'profit':
        return 'bg-green-500/10 border-green-500/20';
      case 'balance':
        return 'bg-blue-500/10 border-blue-500/20';
      default:
        return 'bg-white/5 border-white/10';
    }
  };

  return (
    <div className={`rounded-lg border ${getTypeStyles()} p-4 ${isMobile ? 'p-3' : 'p-4'}`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className={`text-gray-400 ${isMobile ? 'text-xs' : 'text-sm'}`}>{title}</p>
          <p className={`font-bold text-white mt-1 ${isMobile ? 'text-lg' : 'text-2xl'}`}>
            {formatValue(value)}
          </p>
          {trend && (
            <div className={`flex items-center mt-2 ${isMobile ? 'text-xs' : 'text-sm'}`}>
              {trend.direction === 'up' ? (
                <TrendingUp className={`mr-1 ${isMobile ? 'h-3 w-3' : 'h-4 w-4'} text-green-500`} />
              ) : (
                <TrendingDown className={`mr-1 ${isMobile ? 'h-3 w-3' : 'h-4 w-4'} text-red-500`} />
              )}
              <span className={trend.direction === 'up' ? 'text-green-500' : 'text-red-500'}>
                {trend.value}
              </span>
            </div>
          )}
        </div>
        {Icon && (
          <div className={type === 'default' ? 'text-purple-500' : type === 'profit' ? 'text-green-500' : 'text-blue-500'}>
            <Icon className={isMobile ? 'h-6 w-6' : 'h-8 w-8'} />
          </div>
        )}
      </div>
    </div>
  );
}
