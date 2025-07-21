"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import mockData from "@/data/mock-data.json";

interface Props {
  isOpen: boolean;
  closeAction: () => void;
  className?: string;
}

export default function MenuMobile({
  isOpen,
  closeAction,
  className = "",
}: Props) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const handleLinkClick = () => {
    closeAction();
    setOpenSubmenu(null);
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-70 transition-all duration-300",
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      )}
    >
      <div
        className={cn(
          "fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={closeAction}
      />

      <div
        className={cn(
          "fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-xl transform transition-all duration-300 ease-out z-10",
          isOpen ? "translate-x-0" : "translate-x-full",
          className
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Menu
          </h2>
          <button
            onClick={closeAction}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <div className="space-y-1">
            {mockData.navigation.map((item, index) => (
              <div key={index}>
                <div className="flex items-center">
                  <Link
                    href={item.url}
                    onClick={handleLinkClick}
                    className="flex-1 block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand-primary-500 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-brand-primary-400 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                  >
                    {item.title}
                  </Link>

                  {item.submenu && (
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                      aria-expanded={openSubmenu === item.title}
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          openSubmenu === item.title && "rotate-180"
                        )}
                      />
                    </button>
                  )}
                </div>

                {item.submenu && openSubmenu === item.title && (
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.url}
                        onClick={handleLinkClick}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-primary-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-brand-primary-400 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
