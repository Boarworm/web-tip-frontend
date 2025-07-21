import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface Props {
  breadcrumbs: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ breadcrumbs, className }: Props) {
  return (
    <div className="flex justify-center">
      <ol
        className={cn(
          "flex items-center justify-start overflow-y-hidden overflow-x-auto p-0 list-none",
          className
        )}
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            href="/"
            itemProp="item"
            className="flex items-center text-sm no-underline transition text-white hover:underline"
          >
            <div itemProp="name">Home</div>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        <li className="px-2">
          <span className="text-white">/</span>
        </li>

        {breadcrumbs.map((breadcrumb, index) => {
          const position = index + 2; // +2 because Home is position 1
          const isLast = index === breadcrumbs.length - 1;

          return (
            <React.Fragment key={breadcrumb.url || breadcrumb.name}>
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {isLast ? (
                  <div
                    className="whitespace-nowrap text-white text-sm"
                    itemProp="name"
                  >
                    {breadcrumb.name}
                  </div>
                ) : (
                  <Link
                    className="text-white text-sm whitespace-nowrap no-underline transition hover:underline"
                    href={breadcrumb.url}
                    itemProp="item"
                  >
                    <div itemProp="name">{breadcrumb.name}</div>
                  </Link>
                )}
                <meta itemProp="position" content={position.toString()} />
              </li>

              {!isLast && (
                <li className="px-2">
                  <span className="text-white">/</span>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </div>
  );
}
