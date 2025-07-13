import { cn } from "@/lib/utils"

interface LanguagePickerProps {
  className?: string
}

export default function LanguagePicker({ className }: LanguagePickerProps) {
  return (
    <div className={cn("w-[32px] h-[32px] rounded bg-brand-primary-500", className)}>

    </div>
  )
}
