import {
  createRouter as createTanStackRouter,
  Link,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Button } from "./components/ui/button";
import { ArrowRight } from "lucide-react";

export function getRouter() {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
    defaultNotFoundComponent: () => (
      <div className="flex flex-col items-center gap-2 py-20">
        <p className="text-xl font-medium">Page not found!</p>
        <Button asChild>
          <Link to="/">
            <ArrowRight size={16} />
            <span>Go Home</span>
          </Link>
        </Button>
      </div>
    ),
  });

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
