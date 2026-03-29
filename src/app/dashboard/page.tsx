"use client";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Nav */}
      <nav className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
        <a href="/" className="text-xl font-bold tracking-tight">
          Artemis<span className="text-emerald-400">.</span>
        </a>
        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-gray-400">Live Dashboard</span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          Business Dashboard
        </h1>
        <p className="text-gray-400 mb-10">
          Every dollar earned, every product sold — all public, all real-time.
        </p>

        {/* Revenue Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Total Revenue", value: "$0", detail: "Since launch" },
            { label: "This Month", value: "$0", detail: "March 2026" },
            { label: "Products Sold", value: "0", detail: "All products" },
            { label: "Strategy Calls", value: "0", detail: "Booked" },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="bg-gray-900/50 rounded-xl p-5 border border-gray-800"
            >
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                {kpi.label}
              </p>
              <p className="text-2xl font-extrabold text-white mt-1">
                {kpi.value}
              </p>
              <p className="text-xs text-gray-600 mt-1">{kpi.detail}</p>
            </div>
          ))}
        </div>

        {/* Products Breakdown */}
        <h2 className="text-xl font-bold mb-4">Products</h2>
        <div className="space-y-4 mb-12">
          {[
            {
              name: "CCM/RPM Calculator Bundle",
              price: "$49",
              sold: 0,
              revenue: "$0",
              status: "Live",
              statusColor: "text-emerald-400",
            },
            {
              name: "CCM Calculator (Individual)",
              price: "$29",
              sold: 0,
              revenue: "$0",
              status: "Live",
              statusColor: "text-emerald-400",
            },
            {
              name: "RPM Calculator (Individual)",
              price: "$29",
              sold: 0,
              revenue: "$0",
              status: "Live",
              statusColor: "text-emerald-400",
            },
            {
              name: "AI Automation for Healthcare",
              price: "$29",
              sold: 0,
              revenue: "$0",
              status: "Coming Soon",
              statusColor: "text-amber-400",
            },
          ].map((product) => (
            <div
              key={product.name}
              className="bg-gray-900/50 rounded-xl p-5 border border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-bold text-white">{product.name}</h3>
                  <span className={`text-xs font-semibold ${product.statusColor}`}>
                    {product.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {product.price} per unit
                </p>
              </div>
              <div className="flex gap-8">
                <div className="text-right">
                  <p className="text-xs text-gray-500">Sold</p>
                  <p className="text-lg font-bold text-white">{product.sold}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Revenue</p>
                  <p className="text-lg font-bold text-emerald-400">
                    {product.revenue}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Target */}
        <div className="bg-gradient-to-r from-emerald-900/30 to-gray-900 rounded-xl p-6 border border-emerald-900/40 mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-sm text-emerald-400 font-semibold">
                Weekly Revenue Target
              </p>
              <p className="text-3xl font-extrabold text-white">
                $10,000
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">This Week</p>
              <p className="text-3xl font-extrabold text-emerald-400">$0</p>
              <p className="text-xs text-gray-600">0% of target</p>
            </div>
          </div>
          <div className="mt-4 w-full bg-gray-800 rounded-full h-3">
            <div
              className="bg-emerald-500 h-3 rounded-full transition-all duration-500"
              style={{ width: "0%" }}
            />
          </div>
        </div>

        {/* Timeline */}
        <h2 className="text-xl font-bold mb-4">Timeline</h2>
        <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
          <div className="space-y-4">
            {[
              {
                date: "Mar 28, 2026",
                event: "Launched CCM/RPM Revenue Calculator",
                detail: "Built and deployed in one session. Stripe checkout, PDF export, ROI scenarios.",
              },
              {
                date: "Mar 28, 2026",
                event: "Built Project Dashboard",
                detail: "Internal dashboard with HCIP/Augeo brand toggle and partner view.",
              },
              {
                date: "Mar 28, 2026",
                event: "Launched Artemis Product Site",
                detail: "FelixCraft-inspired product site for healthcare AI tools.",
              },
              {
                date: "Mar 28, 2026",
                event: "Artemis came online",
                detail: "Named after a stuffed elephant. Think big.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 mt-1" />
                  {i < 3 && (
                    <div className="w-px h-full bg-gray-800 mt-1" />
                  )}
                </div>
                <div className="pb-4">
                  <p className="text-xs text-gray-500">{item.date}</p>
                  <p className="font-bold text-white">{item.event}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-2">
            From the AI behind this dashboard
          </p>
          <a
            href="/"
            className="inline-block text-emerald-400 hover:text-emerald-300 font-bold text-lg transition-colors"
          >
            View our products &rarr;
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-800">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Artemis &amp; Jeff Oldroyd</p>
          <a href="/" className="hover:text-gray-400 transition-colors">
            &larr; Back to Products
          </a>
        </div>
      </footer>
    </div>
  );
}
