"use client";

const resources = [
  {
    category: "Products",
    items: [
      {
        name: "CCM/RPM Revenue Calculator",
        url: "https://ccm-revenue-calculator.vercel.app",
        description: "Paid calculator for healthcare practices — CCM + RPM revenue estimates, PDF export, ROI scenarios",
        tag: "Live",
        tagColor: "text-emerald-400",
      },
      {
        name: "CCM Calculator (Preview)",
        url: "https://ccm-revenue-calculator.vercel.app?preview=augeo2026",
        description: "Direct preview link — bypasses paywall for internal review",
        tag: "Internal",
        tagColor: "text-amber-400",
      },
      {
        name: "How to Put an AI to Work",
        url: "#",
        description: "PDF playbook — identity, memory, tools, safety, and the operating relationship ($29)",
        tag: "Coming Soon",
        tagColor: "text-amber-400",
      },
    ],
  },
  {
    category: "Sites",
    items: [
      {
        name: "Artemis Product Site",
        url: "https://artemis-site-pi.vercel.app",
        description: "Main product page — FelixCraft-style, AI-as-author positioning",
        tag: "Live",
        tagColor: "text-emerald-400",
      },
      {
        name: "Public Dashboard",
        url: "https://artemis-site-pi.vercel.app/dashboard",
        description: "Revenue transparency dashboard — every dollar, every product, all public",
        tag: "Live",
        tagColor: "text-emerald-400",
      },
      {
        name: "Project HQ",
        url: "https://dashboard-six-roan-46.vercel.app",
        description: "Internal command center — all projects across HCIP and Augeo",
        tag: "Live",
        tagColor: "text-emerald-400",
      },
      {
        name: "HCIP Partner Dashboard",
        url: "https://dashboard-six-roan-46.vercel.app/hcip",
        description: "Partner-shareable HCIP-only project view",
        tag: "Live",
        tagColor: "text-emerald-400",
      },
    ],
  },
  {
    category: "Booking & Calls",
    items: [
      {
        name: "Strategy Call — 30 Minutes with Jeff",
        url: "https://cal.com/agentartemis/30-minutes-with-jeff-oldroyd",
        description: "Cal.com booking page for CCM/RPM consulting strategy calls",
        tag: "Live",
        tagColor: "text-emerald-400",
      },
    ],
  },
  {
    category: "Social & Content",
    items: [
      {
        name: "X / Twitter",
        url: "https://x.com/Artemis_jeff",
        description: "@Artemis_jeff — tweets queued, API connected",
        tag: "Active",
        tagColor: "text-blue-400",
      },
      {
        name: "Beehiiv Newsletter",
        url: "https://beehiiv.com",
        description: "Email newsletter — audience building platform",
        tag: "Setup",
        tagColor: "text-gray-500",
      },
      {
        name: "YouTube",
        url: "https://youtube.com",
        description: "Long-form content channel",
        tag: "Setup",
        tagColor: "text-gray-500",
      },
      {
        name: "Gumroad",
        url: "https://gumroad.com",
        description: "Digital product storefront",
        tag: "Setup",
        tagColor: "text-gray-500",
      },
    ],
  },
  {
    category: "GitHub",
    items: [
      {
        name: "CCM Revenue Calculator",
        url: "https://github.com/Agent-Artemis/ccm-revenue-calculator",
        description: "Next.js 16 + Tailwind + Stripe source",
        tag: "Repo",
        tagColor: "text-gray-500",
      },
      {
        name: "Artemis Product Site",
        url: "https://github.com/Agent-Artemis/artemis-site",
        description: "Product site + public dashboard source",
        tag: "Repo",
        tagColor: "text-gray-500",
      },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      {
        name: "Stripe Dashboard",
        url: "https://dashboard.stripe.com",
        description: "Payments — currently test mode, live keys pending",
        tag: "Test Mode",
        tagColor: "text-amber-400",
      },
      {
        name: "Vercel Dashboard",
        url: "https://vercel.com/dashboard",
        description: "All deployments hosted here",
        tag: "Active",
        tagColor: "text-blue-400",
      },
      {
        name: "Namecheap",
        url: "https://namecheap.com",
        description: "Domain registrar — custom domains pending",
        tag: "Setup",
        tagColor: "text-gray-500",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Nav */}
      <nav className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
        <a href="/" className="text-xl font-bold tracking-tight">
          Artemis<span className="text-emerald-400">.</span>
        </a>
        <div className="flex items-center gap-6 text-sm">
          <a href="/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</a>
          <span className="text-white font-medium">Resources</span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Resources</h1>
        <p className="text-gray-400 mb-12">
          Every link across all projects in one place. No digging.
        </p>

        <div className="space-y-12">
          {resources.map((group) => (
            <div key={group.category}>
              <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-4">
                {group.category}
              </h2>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900/50 rounded-xl border border-gray-800 p-5 hover:border-gray-700 transition-colors block group"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {item.name}
                        <span className="text-gray-600 ml-1.5 text-sm">↗</span>
                      </h3>
                      <span className={`text-xs font-semibold shrink-0 ${item.tagColor}`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center text-sm text-gray-600">
          <p>Last updated: March 29, 2026</p>
          <p className="mt-1">Maintained by Artemis</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-800">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Artemis</p>
          <div className="flex gap-6">
            <a href="/" className="hover:text-gray-400 transition-colors">&larr; Products</a>
            <a href="/dashboard" className="hover:text-gray-400 transition-colors">Dashboard</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
