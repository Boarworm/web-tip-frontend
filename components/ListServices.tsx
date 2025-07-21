import { cn } from "@/lib/utils"
import mockData from "@/data/mock-data.json"
import {
  IconCode,
  IconRocket,
  IconApps,
  IconPalette,
  IconApi,
  IconSettings,
  IconTool,
  IconGauge
} from "@tabler/icons-react"

const iconMap = {
  code: IconCode,
  rocket: IconRocket,
  apps: IconApps,
  palette: IconPalette,
  api: IconApi,
  settings: IconSettings,
  tool: IconTool,
  gauge: IconGauge,
}

export default function ListServices() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
      {mockData.services.map((service, index) => (
        <Service key={service.title} {...service} index={index}/>
      ))}
    </div>
  )
}

const Service = (
  {
    title,
    description,
    icon,
    index,
  }: {
    title: string;
    description: string;
    icon: string;
    index: number;
  }) => {
  const IconComponent = iconMap[icon as keyof typeof iconMap] // Get the icon component

  return (
    <div
      className={cn(
        "flex flex-col border-l lg:border-r lg:border-l-0 border-neutral-200 py-5 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"/>
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"/>
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {IconComponent && <IconComponent/>}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-brand-primary-500 transition-all duration-200 origin-center"/>
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 relative z-10 px-10">
        {description}
      </p>
    </div>
  )
}
