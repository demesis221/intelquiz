import { motion } from 'framer-motion';

type MCQOptionsProps = {
  choices: string[];
  selectedIndex: number | null;
  onSelect: (index: number) => void;
  disabled: boolean;
};

export function MCQOptions({ choices, selectedIndex, onSelect, disabled }: MCQOptionsProps) {
  return (
    <div className="space-y-3">
      {choices.map((choice, index) => (
        <motion.button
          key={index}
          onClick={() => !disabled && onSelect(index)}
          disabled={disabled}
          whileHover={!disabled ? { scale: 1.02 } : {}}
          whileTap={!disabled ? { scale: 0.98 } : {}}
          className={`w-full text-left p-3 sm:p-4 rounded-xl border-2 transition-all text-sm sm:text-base min-h-[48px] ${
            selectedIndex === index
              ? 'border-charcoal bg-charcoal text-white'
              : 'border-gray-300 bg-white hover:border-slate'
          } ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
        >
          <span className="font-medium mr-2 sm:mr-3 text-sm sm:text-base">{index + 1}.</span>
          <span className="break-words">{choice}</span>
        </motion.button>
      ))}
    </div>
  );
}
