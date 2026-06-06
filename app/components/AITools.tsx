import { motion } from 'motion/react';

const aiTools = [
    {
        name: 'ChatGPT',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png',
        color: 'from-sky-200 via-green-100 to-white text-secondary shadow-sky-200 ring-secondary/60',
        tasks: ['Writing captions', 'Drafting emails', 'Content generation', 'Research assistance']
    },
    {
        name: 'Gemini',
        logoUrl: 'https://static.vecteezy.com/system/resources/previews/070/779/929/non_2x/google-gemini-app-icon-on-a-transparent-background-free-png.png',
        color: 'from-pink-200 via-rose-100 to-white text-secondary shadow-pink-200 ring-secondary/60',
        tasks: ['Generating content ideas', 'Summarizing information', 'Brainstorming']
    },
    {
        name: 'Canva AI',
        logoUrl: 'https://static.vecteezy.com/system/resources/thumbnails/056/850/847/small_2x/canva-app-logo-on-a-transparent-background-free-png.png',
        color: 'from-sky-200 via-light purple-100 to-white text-sky-700 shadow-sky-200/60 ring-sky-200/60',
        tasks: ['Design suggestions', 'Background removal', 'Smart templates', 'Auto-resize']
    },
    {
        name: 'Grammarly',
        logoUrl: 'https://static.vecteezy.com/system/resources/previews/077/736/442/non_2x/grammarly-icon-on-a-transparent-background-free-png.png',
        color: 'from-amber-200 via-orange-100 to-white text-amber-700 shadow-amber-200/60 ring-amber-200/60',
        tasks: ['Grammar improvement', 'Tone adjustment', 'Clarity enhancement', 'Plagiarism check']
    },
    {
        name: 'DeepSeek',
        logoUrl: 'https://static.vecteezy.com/system/resources/previews/067/065/674/non_2x/deepseek-logo-square-rounded-deepseek-logo-deepseek-logo-free-download-free-png.png',
        color: 'from-sky-200 via-cyan-100 to-white text-sky-700 shadow-sky-200/60 ring-sky-200/60',
        tasks: ['Grammar improvement', 'Tone adjustment', 'Clarity enhancement', 'Plagiarism check']
    },

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

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
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
                                <div className={`w-22 h-22 rounded-2xl bg-gradient-to-br ${tool.color} shadow-lg ring-1 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 mx-auto`}>
                                    <img 
                                        src={tool.logoUrl} 
                                        alt={`${tool.name} logo`}
                                        className="w-21 h-21 object-contain"
                                    />
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