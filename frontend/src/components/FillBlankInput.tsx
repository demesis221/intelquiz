import { motion } from 'framer-motion';

type FillBlankInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled: boolean;
  placeholder?: string;
};

export function FillBlankInput({ value, onChange, onSubmit, disabled, placeholder }: FillBlankInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !disabled) {
      onSubmit();
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={disabled}
        placeholder={placeholder || 'Type your answer...'}
        className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-xl focus:border-charcoal focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base"
        autoFocus
      />
      <motion.button
        onClick={onSubmit}
        disabled={disabled || !value.trim()}
        whileHover={!disabled && value.trim() ? { scale: 1.02 } : {}}
        whileTap={!disabled && value.trim() ? { scale: 0.98 } : {}}
        className="w-full bg-charcoal text-white py-3 rounded-xl hover:bg-slate transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
      >
        Submit
      </motion.button>
    </div>
  );
}
