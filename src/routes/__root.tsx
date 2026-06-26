import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteLayout } from "../components/site/SiteLayout";
import { Toaster } from "../components/ui/sonner";

function NotFoundComponent() {
  return (
    <SiteLayout>
      <section className="grid min-h-[70vh] place-items-center px-4">
        <div className="text-center max-w-md">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">404</p>
          <h1 className="mt-3 text-5xl font-bold">Page not found</h1>
          <p className="mt-4 text-muted-foreground">The page you are looking for has moved or no longer exists.</p>
          <Link to="/" className="mt-7 inline-flex rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-elegant">Back to home</Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again, or head back to the home page.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Try again</button>
          <a href="/" className="rounded-md border px-4 py-2 text-sm font-medium">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Chemii-Synth — Industrial & Household Cleaning Chemicals Since 1977" },
      { name: "description", content: "Chemii-Synth manufactures premium eco-friendly cleaning and hygiene products for industries, hospitals, hotels and homes across India. Trusted since 1977." },
      { name: "author", content: "Chemii-Synth" },
      { name: "keywords", content: "cleaning chemicals, industrial cleaners, eco-friendly cleaners, housekeeping chemicals, hospital cleaners, manufacturer India, Kolkata" },
      { property: "og:site_name", content: "Chemii-Synth" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Chemii-Synth — Industrial & Household Cleaning Chemicals Since 1977" },
      { property: "og:description", content: "Chemii-Synth manufactures premium eco-friendly cleaning and hygiene products for industries, hospitals, hotels and homes across India. Trusted since 1977." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Chemii-Synth — Industrial & Household Cleaning Chemicals Since 1977" },
      { name: "twitter:description", content: "Chemii-Synth manufactures premium eco-friendly cleaning and hygiene products for industries, hospitals, hotels and homes across India. Trusted since 1977." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/471a2fb5-9bc2-4dac-b326-04cfbcee437d/id-preview-282a6581--781bf0be-9c95-44b2-bb0c-fe7d5511a1a7.lovable.app-1782459904664.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/471a2fb5-9bc2-4dac-b326-04cfbcee437d/id-preview-282a6581--781bf0be-9c95-44b2-bb0c-fe7d5511a1a7.lovable.app-1782459904664.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Chemii-Synth",
          foundingDate: "1977",
          url: "/",
          description: "Indian manufacturer of industrial and household cleaning & hygiene products.",
          address: { "@type": "PostalAddress", addressLocality: "Kolkata", addressRegion: "WB", addressCountry: "IN" },
          contactPoint: { "@type": "ContactPoint", telephone: "+91-9830247883", contactType: "sales", email: "info@chemii-synth.co.in" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster />
    </QueryClientProvider>
  );
}
