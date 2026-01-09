import React from 'react';
import { cn } from '@/lib/utils';

const Badge = ({ children, className, variant = 'default', ...props }) => {
	const base = 'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium';
	const variants = {
		default: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
		subtle: 'bg-transparent text-gray-600',
		destructive: 'bg-red-100 text-red-800',
	};

	return (
		<span className={cn(base, variants[variant] || variants.default, className)} {...props}>
			{children}
		</span>
	);
};

export { Badge };
