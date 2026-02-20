type ProgressBarProps = {
  current: number;
  total: number;
  timeElapsed?: number;
};

export function ProgressBar({ current, total, timeElapsed }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-xs sm:text-sm text-warmGray">
        <span>Question {current} of {total}</span>
        {timeElapsed !== undefined && <span>{formatTime(timeElapsed)}</span>}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-charcoal h-2 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
