import { LucideIcon } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CardStatProps {
  title: string;
  highlight: string;
  description?: string;
  icon: LucideIcon;
}

export function CardStat({
  title,
  highlight,
  icon,
  description,
}: CardStatProps) {
  const Icon = icon;

  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        <Icon size={16} />
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>{highlight}</div>
        {description && (
          <p className='text-xs text-muted-foreground'>{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
