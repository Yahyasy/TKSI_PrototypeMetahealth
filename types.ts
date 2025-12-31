export interface UserProfile {
  weight: string;
  height: string;
  condition: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
  isStepsAdjustment?: boolean;
}

export interface HealthMetric {
  label: string;
  value: string;
  unit: string;
  trend?: number; // percentage
  trendLabel?: string;
  icon: string;
  colorClass: string;
}
