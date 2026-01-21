import { TrendingUp, TrendingDown } from "lucide-react";

export default function Overview() {
  const stats = [
    {
      label: "Total Revenue",
      value: "₦2,450,000",
      change: "+18.2%",
      trend: "up",
      icon: "₦",
      period: "Last 30 days",
      color: "border-primary"
    },
    {
      label: "Total Sales",
      value: "342",
      change: "+12.5%",
      trend: "up",
      icon: "📦",
      subtext: "Orders completed",
      color: "border-primary"
    },
    {
      label: "Active Chats",
      value: "89",
      change: "+24.3%",
      trend: "up",
      icon: "💬",
      subtext: "Ongoing conversations",
      color: "border-purple-500"
    },
    {
      label: "New Customers",
      value: "156",
      change: "-3.2%",
      trend: "down",
      icon: "👥",
      subtext: "This month",
      color: "border-gray-400"
    }
  ];

  const chartData = [80000, 95000, 75000, 110000, 130000, 145000];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const maxRevenue = Math.max(...chartData);

  const salesData = [35, 45, 55, 60, 70, 75, 80];
  const maxSales = Math.max(...salesData);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Overview</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div 
            key={i} 
            className={`bg-white rounded-xl p-6 border-2 ${stat.color} border-opacity-30 hover:border-opacity-100 transition-all`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
                <h3 className="text-2xl md:text-3xl font-bold">{stat.value}</h3>
              </div>
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <div className="flex items-center gap-2">
              {stat.trend === "up" ? (
                <TrendingUp className="w-4 h-4 text-green-600" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-600" />
              )}
              <span className={`text-xs font-semibold ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                {stat.change}
              </span>
              {stat.period && <span className="text-xs text-muted-foreground">{stat.period}</span>}
            </div>
            {stat.subtext && <p className="text-xs text-muted-foreground mt-2">{stat.subtext}</p>}
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <div className="bg-white rounded-xl p-6 border border-border">
          <h3 className="text-lg font-bold mb-2">Revenue Trend</h3>
          <p className="text-sm text-muted-foreground mb-6">Monthly revenue over the last 6 months</p>
          
          <div className="h-64 flex items-end justify-between gap-2 px-2">
            {chartData.map((value, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-gradient-to-t from-primary to-primary/50 rounded-t-lg transition-all hover:from-primary/80"
                  style={{ height: `${(value / maxRevenue) * 100}%` }}
                />
                <span className="text-xs text-muted-foreground text-center">{months[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sales Volume */}
        <div className="bg-white rounded-xl p-6 border border-border">
          <h3 className="text-lg font-bold mb-2">Sales Volume</h3>
          <p className="text-sm text-muted-foreground mb-6">Orders per month</p>
          
          <div className="h-64 flex items-end justify-between gap-2 px-2">
            {salesData.map((value, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-primary rounded-t-lg transition-all hover:bg-primary/80"
                  style={{ height: `${(value / maxSales) * 100}%` }}
                />
                <span className="text-xs text-muted-foreground text-center">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
