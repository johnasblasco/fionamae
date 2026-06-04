import { motion } from 'motion/react';
import { Bot, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';

const aiTools = [
    {
        name: 'ChatGPT',
        icon: MessageSquare,
        color: 'from-primary/25 via-emerald-100 to-white text-primary shadow-primary/20 ring-primary/30',
        tasks: ['Writing captions', 'Drafting emails', 'Content generation', 'Research assistance']
    },
    {
        name: 'Gemini',
        icon: Sparkles,
        color: 'from-secondary/30 via-rose-100 to-white text-secondary shadow-secondary/20 ring-secondary/30',
        tasks: ['Generating content ideas', 'Summarizing information', 'Brainstorming']
    },
    {
        name: 'Canva AI',
        icon: Bot,
        color: 'from-sky-200 via-cyan-100 to-white text-sky-700 shadow-sky-200/60 ring-sky-200/60',
        tasks: ['Design suggestions', 'Background removal', 'Smart templates', 'Auto-resize']
    },
    {
        name: 'Grammarly',
        icon: CheckCircle2,
        color: 'from-amber-200 via-orange-100 to-white text-amber-700 shadow-amber-200/60 ring-amber-200/60',
        tasks: ['Grammar improvement', 'Tone adjustment', 'Clarity enhancement', 'Plagiarism check']
    }
];

export function AITools() {
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
                        AI Tools Experience
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Leveraging cutting-edge AI technology to enhance productivity and quality
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {aiTools.map((tool, index) => (
                        <motion.div
                            key={tool.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="h-full bg-card rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} shadow-lg ring-1 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 mx-auto`}>
                                    <tool.icon className="w-8 h-8 drop-shadow-sm" strokeWidth={2.2} />
                                </div>

                                <h3 className="text-xl text-center mb-4 text-foreground">
                                    {tool.name}
                                </h3>

                                <ul className="space-y-2">
                                    {tool.tasks.map((task) => (
                                        <li key={task} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
