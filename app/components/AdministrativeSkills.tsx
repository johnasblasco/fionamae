import { motion } from 'motion/react';
import { useState } from 'react';
import {
  FileText,
  Table,
  Mail,
  Database,
  Search,
  Calendar,
  FolderOpen,
  FileEdit
} from 'lucide-react';

// Softer pastel gradients
const colorPalette = [
  { name: 'Microsoft Word', percentage: 92, icon: FileText, gradient: 'from-emerald-200 to-emerald-400', colorStart: '#6ee7b7', colorEnd: '#34d399' },
  { name: 'Excel', percentage: 88, icon: Table, gradient: 'from-rose-200 to-rose-400', colorStart: '#fecdd3', colorEnd: '#fb7185' },
  { name: 'Google Sheets', percentage: 84, icon: Table, gradient: 'from-amber-200 to-amber-400', colorStart: '#fde68a', colorEnd: '#fbbf24' },
  { name: 'Google Docs', percentage: 90, icon: FileText, gradient: 'from-emerald-200 to-emerald-400', colorStart: '#6ee7b7', colorEnd: '#34d399' },
  { name: 'Email Management', percentage: 96, icon: Mail, gradient: 'from-rose-200 to-rose-400', colorStart: '#fecdd3', colorEnd: '#fb7185' },
  { name: 'Data Entry', percentage: 98, icon: Database, gradient: 'from-sky-200 to-sky-400', colorStart: '#bae6fd', colorEnd: '#38bdf8' },
  { name: 'Internet Research', percentage: 94, icon: Search, gradient: 'from-emerald-200 to-emerald-400', colorStart: '#6ee7b7', colorEnd: '#34d399' },
  { name: 'Calendar Management', percentage: 91, icon: Calendar, gradient: 'from-rose-200 to-rose-400', colorStart: '#fecdd3', colorEnd: '#fb7185' },
  { name: 'File Organization', percentage: 89, icon: FolderOpen, gradient: 'from-amber-200 to-amber-400', colorStart: '#fde68a', colorEnd: '#fbbf24' },
  { name: 'Document Formatting', percentage: 93, icon: FileEdit, gradient: 'from-emerald-200 to-emerald-400', colorStart: '#6ee7b7', colorEnd: '#34d399' }
];

const percentToRadians = (percent: number) => {
  return (percent / 100) * 2 * Math.PI - Math.PI / 2;
};

const SoftPieGauge = ({ percentage, gradient, colorStart, colorEnd, skillName }: { 
  percentage: number; 
  gradient: string; 
  colorStart: string; 
  colorEnd: string; 
  skillName: string;
}) => {
  const size = 200;
  const center = size / 2;
  const radius = 85;
  
  const endAngle = percentToRadians(percentage);
  const startAngle = -Math.PI / 2;
  
  const startX = center + radius * Math.cos(startAngle);
  const startY = center + radius * Math.sin(startAngle);
  const endX = center + radius * Math.cos(endAngle);
  const endY = center + radius * Math.sin(endAngle);
  
  const largeArcFlag = percentage > 50 ? 1 : 0;
  
  const sectorPath = percentage === 100
    ? `M ${center} ${center} L ${startX} ${startY} A ${radius} ${radius} 0 1 1 ${startX - 0.01} ${startY} Z`
    : `M ${center} ${center} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;

  const gradientId = `pieGradient-${skillName.replace(/\s/g, '')}`;

  return (
    <div className="relative w-full max-w-[220px] mx-auto group">
      <div 
        className="absolute inset-0 rounded-full blur-xl opacity-20 transition-opacity group-hover:opacity-30" 
        style={{ background: `linear-gradient(135deg, ${colorStart}, ${colorEnd})` }}
      />
      
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-auto drop-shadow-sm">
        <defs>
          <filter id="pieShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15"/>
          </filter>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorStart} />
            <stop offset="100%" stopColor={colorEnd} />
          </linearGradient>
        </defs>

        {/* Outer dashed ring – lighter for black bg */}
        <circle
          cx={center}
          cy={center}
          r={radius + 10}
          fill="none"
          stroke="#334155"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        
        {/* Background circle – dark but not black to create contrast */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="#1e293b"
          filter="url(#pieShadow)"
        />
        
        {/* Filled sector – soft gradient */}
        <motion.path
          d={sectorPath}
          fill={`url(#${gradientId})`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        {/* Inner accent ring */}
        <circle
          cx={center}
          cy={center}
          r={radius - 6}
          fill="none"
          stroke={colorEnd}
          strokeWidth="0.8"
          strokeOpacity="0.4"
        />

        {/* Center text – white for dark background */}
        <foreignObject x={center - 70} y={center - 36} width="140" height="72">
          <div className="flex flex-col items-center justify-center w-full h-full text-center">
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">mastery</p>
            <p className="text-2xl font-bold text-white">{percentage}%</p>
            <p className="text-[11px] font-medium text-slate-300 mt-0.5 line-clamp-2 px-1">{skillName}</p>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export function AdministrativeSkills() {
  const [selectedSkill, setSelectedSkill] = useState(colorPalette[0]);

  return (
    // Solid black background – exactly as requested
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-2 tracking-tight">
            Administrative Skills
          </h2>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            Core competencies mastered with precision
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-6">
          {/* Left: Soft pie gauge */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-start">
            <motion.div
              key={selectedSkill.name}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
            >
              <SoftPieGauge
                percentage={selectedSkill.percentage}
                gradient={selectedSkill.gradient}
                colorStart={selectedSkill.colorStart}
                colorEnd={selectedSkill.colorEnd}
                skillName={selectedSkill.name}
              />
            </motion.div>
          </div>

          {/* Right: Wider skill list – adapted for black background */}
          <div className="w-full md:w-3/5">
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
            >
              {colorPalette.map((skill, idx) => (
                <motion.button
                  key={skill.name}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: idx * 0.02 }}
                  onClick={() => setSelectedSkill(skill)}
                  className={`
                    group flex items-center gap-3 p-2.5 rounded-xl text-left transition-all duration-200
                    ${selectedSkill.name === skill.name
                      ? 'bg-slate-800 shadow-md ring-1 ring-slate-700'
                      : 'hover:bg-slate-900 hover:shadow-sm'
                    }
                  `}
                >
                  {/* Icon with gradient background */}
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${skill.gradient} shadow-sm`}
                  >
                    <skill.icon className="w-4 h-4 text-white drop-shadow-sm" strokeWidth={1.8} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-1">
                      <p className="text-xs font-semibold text-slate-200 truncate">{skill.name}</p>
                      <span className="text-[11px] font-bold text-slate-400">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.gradient}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 0.4, delay: idx * 0.03 }}
                      />
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            <p className="text-[11px] text-center text-slate-500 mt-6 pt-2 border-t border-slate-800">
              ✦ Each skill stands alone — independent proficiency levels ✦
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}