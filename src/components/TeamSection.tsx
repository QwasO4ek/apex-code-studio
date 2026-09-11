import React from 'react';
import { TEAM_MEMBERS, TEAM_VALUES } from '../data/teamData';
import { Terminal, Palette, Cpu, ShieldCheck, Code, Key, Clock, Headphones, Users } from 'lucide-react';

const renderRoleIcon = (iconName: string) => {
  const props = { className: "w-5 h-5 text-cyber-400" };
  switch (iconName) {
    case 'Terminal': return <Terminal {...props} />;
    case 'Palette': return <Palette {...props} />;
    case 'Cpu': return <Cpu {...props} />;
    case 'ShieldCheck': return <ShieldCheck {...props} />;
    default: return <Users {...props} />;
  }
};

const renderValueIcon = (iconName: string) => {
  const props = { className: "w-5 h-5 text-cyber-400" };
  switch (iconName) {
    case 'Code': return <Code {...props} />;
    case 'Key': return <Key {...props} />;
    case 'Clock': return <Clock {...props} />;
    case 'Headphones': return <Headphones {...props} />;
    default: return <Users {...props} />;
  }
};

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 lg:py-32 relative bg-dark-900/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-500/10 border border-cyber-500/30 text-cyber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5 text-cyber-400" />
            <span>Инженерный коллектив</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Команда программистов <br />
            <span className="gradient-cyber">и продуктовых дизайнеров</span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Мы работаем слаженной командой полного цикла: от проектирования интерфейсов до глубокой кастомной логики и вывода проекта в продакшен.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-950/70 border border-slate-800 hover:border-cyber-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-850 border border-white/5 group-hover:scale-105 transition-transform">
                    {renderRoleIcon(member.icon)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900">
                    {member.experience}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-white">
                  {member.name}
                </h3>
                <div className="text-xs font-semibold text-cyber-400 mt-0.5 mb-3">
                  {member.role}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {member.skills.map((s, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Team Principles / Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_VALUES.map((val, vIdx) => (
            <div
              key={vIdx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="p-2 rounded-xl bg-cyber-500/10 border border-cyber-500/20 w-fit mb-3">
                  {renderValueIcon(val.iconName)}
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{val.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};