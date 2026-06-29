import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#F8FAFC] dark:bg-[#0A0D14] transition-colors duration-300">
      {/* Navbar Skeleton */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/80 dark:border-slate-800/80 dark:bg-[#0A0D14]/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-xl" />
            <div className="flex flex-col gap-1">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-16 sm:w-24 rounded-full" />
            <Skeleton className="h-10 w-20 sm:w-28 rounded-full" />
          </div>
        </div>
      </header>

      {/* Hero Section Container */}
      <section className="relative mx-auto max-w-7xl px-4 pt-6 pb-12 sm:px-6 md:pt-10 md:pb-16 lg:px-8 lg:pt-12 lg:pb-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Hero Left Column Skeleton */}
          <div className="text-left lg:col-span-6">
            <Skeleton className="mb-4 h-4 w-32 rounded" />
            <Skeleton className="mb-6 h-12 w-full max-w-md rounded-lg" />
            <Skeleton className="mb-6 h-6 w-full max-w-lg rounded" />
            <Skeleton className="mb-8 h-6 w-4/5 rounded" />
            <div className="grid grid-cols-3 gap-2 w-full sm:flex sm:w-auto sm:gap-4">
              <Skeleton className="h-12 w-full sm:w-28 rounded-2xl sm:rounded-full" />
              <Skeleton className="h-12 w-full sm:w-32 rounded-2xl sm:rounded-full" />
              <Skeleton className="h-12 w-full sm:w-28 rounded-2xl sm:rounded-full" />
            </div>
          </div>

          {/* Hero Right Column (DeviceMockup) Skeleton */}
          <div className="relative flex min-h-125 w-full flex-col items-center justify-center lg:col-span-6">
            <div className="relative flex aspect-square w-full max-w-105 items-center justify-center">
              <Skeleton className="h-[320px] w-[320px] sm:h-[380px] sm:w-[380px] lg:h-[420px] lg:w-[420px] rounded-3xl" />
            </div>
            {/* Side Card 1 Skeleton */}
            <div className="absolute top-[8%] left-[-4%] z-30 flex w-[210px] items-center gap-3 rounded-2xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-[#131B2E]/95 shadow-xl">
              <Skeleton className="h-10 w-10 rounded-xl" />
              <div className="flex flex-col gap-1.5 flex-1">
                <Skeleton className="h-3 w-12" />
                <Skeleton className="h-2 w-full" />
                <Skeleton className="h-2 w-4/5" />
              </div>
            </div>
            {/* Side Card 2 Skeleton */}
            <div className="absolute top-[18%] right-[-4%] z-30 flex w-[210px] items-center gap-3 rounded-2xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-[#131B2E]/95 shadow-xl">
              <Skeleton className="h-10 w-10 rounded-xl" />
              <div className="flex flex-col gap-1.5 flex-1">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-2 w-full" />
                <Skeleton className="h-2 w-3/4" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Horizontal Cards Skeleton */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#131B2E]/40">
            <Skeleton className="mb-3 h-3 w-20" />
            <Skeleton className="mb-2 h-6 w-32" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="mt-2 h-4 w-4/5" />
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#131B2E]/40">
            <Skeleton className="mb-3 h-3 w-16" />
            <Skeleton className="mb-2 h-6 w-36" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="mt-2 h-4 w-3/4" />
          </div>
        </div>
      </section>

      {/* Scrollytelling Section Skeleton */}
      <section className="relative bg-slate-100 py-24 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5 text-left">
              <Skeleton className="mb-3 h-3 w-24" />
              <Skeleton className="mb-4 h-8 w-48" />
              <Skeleton className="mb-6 h-4 w-full" />
              <Skeleton className="mb-6 h-4 w-4/5" />
              <Skeleton className="h-10 w-36 rounded-lg" />
            </div>
            <div className="lg:col-span-7 flex justify-center">
              <Skeleton className="h-[300px] w-full max-w-[500px] rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* xSecure Section Skeleton */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl text-left">
          <Skeleton className="mb-3 h-3 w-20" />
          <Skeleton className="mb-4 h-10 w-64" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#131B2E]/30"
            >
              <Skeleton className="mb-4 h-12 w-12 rounded-xl" />
              <Skeleton className="mb-2 h-6 w-28" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="mt-2 h-4 w-5/6" />
            </div>
          ))}
        </div>
      </section>

      {/* Specs Section Skeleton */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl text-left">
          <Skeleton className="mb-3 h-3 w-36" />
          <Skeleton className="mb-4 h-10 w-40" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#131B2E]/30"
            >
              <Skeleton className="mb-2 h-3 w-24" />
              <Skeleton className="mb-4 h-8 w-36" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="mt-2 h-4 w-4/5" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
