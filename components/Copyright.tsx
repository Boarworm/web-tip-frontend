interface Props {
  startYear?: number
  companyName: string
  className?: string
}

export default function Copyright({ startYear, companyName, className }: Props) {
  const currentYear = new Date().getFullYear()

  const yearDisplay = startYear && startYear !== currentYear
    ? `${startYear}-${currentYear}`
    : currentYear

  return (
    <span className={className}>
      &copy; {yearDisplay} {companyName}. All rights reserved.
    </span>
  )
}
