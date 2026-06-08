import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { TOOLS_DATA } from '@/lib/tools';
import {
  BarChart2, Users, Star, Zap, Crown, CheckCircle,
  XCircle, Clock, TrendingUp, DollarSign, Eye, Package
} from 'lucide-react';

const ADMIN_EMAIL = 'hamdi.abdwd@gmail.com';

// Mock pending submissions (in production, these would come from a database)
const MOCK_SUBMISSIONS = [
  { id: 1, name: 'SuperAgent Pro', url: 'https://superagent.pro', category: 'agents', email: 'founder@superagent.pro', desc: 'Autonomous AI agent for business automation', plan: 'Standard', date: '2026-06-07', status: 'pending' },
  { id: 2, name: 'WriteGenius', url: 'https://writegenius.ai', category: 'writing', email: 'hello@writegenius.ai', desc: 'AI writing assistant powered by GPT-4', plan: 'Free', date: '2026-06-06', status: 'pending' },
  { id: 3, name: 'PixelForge AI', url: 'https://pixelforge.ai', category: 'image', email: 'team@pixelforge.ai', desc: 'Generate stunning images with diffusion models', plan: 'Featured', date: '2026-06-05', status: 'pending' },
];

export default async function AdminPage({ params }: { params: { locale: string } }) {
  const { userId } = auth();
  if (!userId) redirect(`/${params.locale}/sign-in`);

  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress;
  if (email !== ADMIN_EMAIL) redirect(`/${params.locale}`);

  // Stats
  const totalTools = TOOLS_DATA.length;
  const totalAgents = TOOLS_DATA.filter(t => t.category === 'agents').length;
  const featuredTools = TOOLS_DATA.filter(t => t.isFeaturedSponsored).length;
  const weeklyFeatured = TOOLS_DATA.filter(t => t.isWeeklyFeatured).length;
  const freeTools = TOOLS_DATA.filter(t => t.pricing === 'Free').length;
  const paidTools = TOOLS_DATA.filter(t => t.pricing === 'Paid').length;
  const topTools = [...TOOLS_DATA].sort((a, b) => b.views - a.views).slice(0, 5);

  const stats = [
    { label: 'Total Tools', value: totalTools, icon: Package, color: 'text-violet-400', bg: 'bg-violet-500/10' },
    { label: 'AI Agents', value: totalAgents, icon: Zap, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { label: 'Featured Sponsored', value: featuredTools, icon: Crown, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { label: 'Weekly Featured', value: weeklyFeatured, icon: Star, color: 'text-green-400', bg: 'bg-green-500/10' },
    { label: 'Free Tools', value: freeTools, icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'Paid Tools', value: paidTools, icon: DollarSign, color: 'text-pink-400', bg: 'bg-pink-500/10' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black text-white">Admin Dashboard</h1>
          <p className="text-gray-400 text-sm mt-1">Welcome back, {user?.firstName || 'Hamdi'} 👋</p>
        </div>
        <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full border border-green-500/30">
          ● Live
        </span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className={`w-9 h-9 ${s.bg} rounded-xl flex items-center justify-center mb-3`}>
              <s.icon className={`w-5 h-5 ${s.color}`} />
            </div>
            <p className="text-2xl font-black text-white">{s.value}</p>
            <p className="text-gray-400 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

        {/* Pending Submissions */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-white font-bold text-lg flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" />
              Pending Submissions
            </h2>
            <span className="bg-amber-500/20 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full">
              {MOCK_SUBMISSIONS.length} pending
            </span>
          </div>

          <div className="space-y-3">
            {MOCK_SUBMISSIONS.map(sub => (
              <div key={sub.id} className="bg-white/5 rounded-xl p-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <p className="text-white font-semibold text-sm">{sub.name}</p>
                    <p className="text-gray-500 text-xs">{sub.email}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    sub.plan === 'Featured' ? 'bg-amber-500/20 text-amber-400' :
                    sub.plan === 'Standard' ? 'bg-violet-500/20 text-violet-400' :
                    'bg-white/10 text-gray-400'
                  }`}>
                    {sub.plan}
                  </span>
                </div>
                <p className="text-gray-400 text-xs mb-3 line-clamp-1">{sub.desc}</p>
                <div className="flex items-center gap-2">
                  <a href={sub.url} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-violet-400 hover:underline flex-1 truncate">{sub.url}</a>
                  <button className="flex items-center gap-1 text-xs bg-green-500/20 text-green-400 hover:bg-green-500/30 px-2.5 py-1 rounded-lg transition">
                    <CheckCircle className="w-3 h-3" /> Approve
                  </button>
                  <button className="flex items-center gap-1 text-xs bg-red-500/20 text-red-400 hover:bg-red-500/30 px-2.5 py-1 rounded-lg transition">
                    <XCircle className="w-3 h-3" /> Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Tools by Views */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-bold text-lg flex items-center gap-2 mb-5">
            <TrendingUp className="w-5 h-5 text-violet-400" />
            Top Tools by Views
          </h2>
          <div className="space-y-3">
            {topTools.map((tool, i) => (
              <div key={tool.id} className="flex items-center gap-3">
                <span className="text-gray-600 text-xs font-bold w-4">#{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-white text-sm font-semibold truncate">{tool.name}</p>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {tool.views >= 1000 ? `${(tool.views / 1000).toFixed(0)}k` : tool.views}
                    </span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-violet-500 to-cyan-500 h-1.5 rounded-full"
                      style={{ width: `${(tool.views / topTools[0].views) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-cyan-400" />
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Add New Tool', href: '#', icon: '➕', color: 'violet' },
            { label: 'View Analytics', href: 'https://analytics.google.com', icon: '📊', color: 'blue' },
            { label: 'Lemon Squeezy', href: 'https://app.lemonsqueezy.com', icon: '🍋', color: 'amber' },
            { label: 'Search Console', href: 'https://search.google.com/search-console', icon: '🔍', color: 'green' },
          ].map((action, i) => (
            <a key={i} href={action.href} target={action.href !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 text-center transition">
              <span className="text-2xl">{action.icon}</span>
              <span className="text-white text-xs font-semibold">{action.label}</span>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
