import { motion } from 'motion/react';
import {
    Target,
    Zap,
    Shield,
    MessageCircle,
    Palette,
    Sparkles,
    Repeat,
    Clock
} from 'lucide-react';

const reasons = [
    {
        icon: Target,
        title: 'Detail-Oriented',
        description: 'Meticulous attention to every aspect of your projects',
        color: 'from-primary/25 via-emerald-100 to-white text-primary shadow-primary/20 ring-primary/30'
    },
    {
        icon: Zap,
        title: 'Fast Learner',
        description: 'Quick to adapt to new tools, systems, and processes',
        color: 'from-secondary/30 via-rose-100 to-white text-secondary shadow-secondary/20 ring-secondary/30'
    },
    {
        icon: Shield,
        title: 'Reliable & Organized',
        description: 'Consistent delivery with systematic approach',
        color: 'from-sky-200 via-cyan-100 to-white text-sky-700 shadow-sky-200/60 ring-sky-200/60'
    },
    {
        icon: MessageCircle,
        title: 'Strong Communication',
        description: 'Clear and responsive throughout collaboration',
        color: 'from-amber-200 via-orange-100 to-white text-amber-700 shadow-amber-200/60 ring-amber-200/60'
    },
    {
        icon: Palette,
        title: 'Canva Proficient',
        description: 'Expert in creating stunning visual content',
        color: 'from-primary/25 via-emerald-100 to-white text-primary shadow-primary/20 ring-primary/30'
    },
    {
        icon: Sparkles,
        title: 'AI Tool Proficient',
        description: 'Leveraging AI for enhanced productivity',
        color: 'from-secondary/30 via-rose-100 to-white text-secondary shadow-secondary/20 ring-secondary/30'
    },
    {
        icon: Repeat,
        title: 'Adaptable',
        description: 'Flexible to changing requirements and priorities',
        color: 'from-sky-200 via-cyan-100 to-white text-sky-700 shadow-sky-200/60 ring-sky-200/60'
    },
    {
        icon: Clock,
        title: 'Deadline Driven',
        description: 'Committed to timely project completion',
        color: 'from-amber-200 via-orange-100 to-white text-amber-700 shadow-amber-200/60 ring-amber-200/60'
    }
];

export function WhyWorkWithMe() {
    return (
        <section className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                        Why Work With Me
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        I am committed to providing high-quality work, meeting deadlines, and helping
                        businesses grow through efficient support and professional design.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="h-full bg-card rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30 text-center">
                                <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${reason.color} shadow-lg ring-1 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                    <reason.icon className="w-7 h-7 drop-shadow-sm" strokeWidth={2.2} />
                                </div>

                                <h3 className="text-lg mb-2 text-foreground">
                                    {reason.title}
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    {reason.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
