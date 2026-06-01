import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import type React from "react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 p-3 backdrop-blur-md transition-all duration-300 dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-foreground flex items-center gap-2.5 font-bold tracking-tight"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-white shadow-xs dark:bg-slate-50 dark:text-slate-950">
                <ShoppingBag className="h-4 w-4" />
              </span>
              <span className="bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-lg font-extrabold tracking-tight text-transparent dark:from-white dark:to-slate-300">
                StackShop
              </span>
            </Link>
            {/* Navigation Links */}
            <nav className="hidden items-center gap-6 rounded-full border border-slate-200/60 bg-slate-100/50 p-1 px-4 transition-all duration-300 md:flex dark:border-slate-800/60 dark:bg-slate-900/50">
              <NavigationLink to="/products">Products</NavigationLink>
              <NavigationLink to="/create-product">
                Create Product
              </NavigationLink>
            </nav>
          </div>
          <Link to="/cart" className="text-foreground flex items-center gap-2 rounded-full border border-slate-200/60 bg-slate-100/50 px-4 py-2 transition-all duration-300 hover:border-slate-300 dark:border-slate-800/60 dark:bg-slate-900/50 dark:hover:border-slate-700">
            <span className="text-sm font-bold">Cart</span>
            <span className="text-sm bg-black text-white rounded-full px-1.5">0</span>
            <span className="hidden md:inline text-sm">$10</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

const NavigationLink = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) => {
  return (
    <Link
      to={to}
      className="flex items-center rounded-full py-1.5 text-xs font-semibold tracking-wide text-slate-600 transition-all duration-200 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 [&.active]:bg-white [&.active]:text-slate-950 [&.active]:shadow-xs dark:[&.active]:bg-slate-950 dark:[&.active]:text-white dark:[&.active]:shadow-md"
      activeProps={{ className: "active" }}
    >
      {children}
    </Link>
  );
};
