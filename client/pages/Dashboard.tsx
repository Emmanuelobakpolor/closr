import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Bell, Settings, LogOut, Search, Plus, Edit2, X } from "lucide-react";
import Overview from "@/components/dashboard/Overview";
import Products from "@/components/dashboard/Products";
import Chats from "@/components/dashboard/Chats";

type NavItem = "overview" | "products" | "chats" | "payouts" | "settings";

const navItems: { id: NavItem; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "📊" },
  { id: "products", label: "Products", icon: "🛍️" },
  { id: "chats", label: "Chats", icon: "💬" },
  { id: "payouts", label: "Payouts", icon: "💰" },
  { id: "settings", label: "Settings", icon: "⚙️" }
];

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState<NavItem>("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className={`fixed lg:relative w-64 h-screen bg-primary text-white p-6 z-40 transition-all ${
        mobileMenuOpen ? "left-0" : "-left-64 lg:left-0"
      }`}>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-sm">C</span>
            </div>
            <span className="font-bold text-lg">Closr</span>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden text-white hover:bg-primary/80 p-1 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveNav(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                activeNav === item.id
                  ? "bg-white/20"
                  : "hover:bg-white/10"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6 pt-6 border-t border-white/20">
          <Link to="/" className="w-full block">
            <Button variant="outline" className="w-full justify-center gap-2 bg-white text-primary hover:bg-white/90 border-0">
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </Link>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-border px-4 md:px-6 py-4 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-secondary rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold capitalize">{activeNav}</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-secondary px-3 py-2 rounded-lg flex-1 md:flex-none">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search products, users, transactions..."
                className="bg-transparent border-0 outline-none text-sm w-full"
              />
            </div>
            <button className="relative p-2 hover:bg-secondary rounded-lg">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
              FH
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-4 md:p-6">
          {activeNav === "overview" && <Overview />}
          {activeNav === "products" && <Products />}
          {activeNav === "chats" && <Chats />}
          {activeNav === "payouts" && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">Payouts</h2>
              <p className="text-muted-foreground">Payouts management coming soon</p>
            </div>
          )}
          {activeNav === "settings" && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">Settings</h2>
              <p className="text-muted-foreground">Settings page coming soon</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
