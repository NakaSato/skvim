"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Book, User, FolderOpen, PenTool } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "หน้าแรก", icon: Home },
    {
      href: "/vim-cheat-sheet",
      label: "VIM Cheat Sheet",
      icon: Book,
      badge: "Hot",
    },
    { href: "/about", label: "เกี่ยวกับ", icon: User },
    { href: "/projects", label: "ผลงาน", icon: FolderOpen },
    { href: "/blog", label: "บล็อก", icon: PenTool },
  ];

  return (
    <nav className="flex flex-wrap gap-2 justify-center mb-8">
      {navItems.map(({ href, label, icon: Icon, badge }) => (
        <div key={href} className="relative">
          <Button
            asChild
            variant={pathname === href ? "default" : "outline"}
            size="sm"
            className="transition-all duration-200"
          >
            <Link href={href} className="flex items-center gap-2">
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          </Button>
          {badge && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 text-xs px-1 py-0 h-5"
            >
              {badge}
            </Badge>
          )}
        </div>
      ))}
    </nav>
  );
}
