import { motion } from 'motion/react';
import {
    Layout,
    Share2,
    Presentation,
    Briefcase,
    Sparkles
} from 'lucide-react';

const services = [
    {
        icon: Layout,
        title: 'Canva Template Editing',
        description: 'Professional template customization for your brand',
        features: [
            'Editing pre-made Canva templates',
            'Replacing text and images',
            'Brand customization',
            'Social media content formatting'
        ],
        color: 'from-primary/25 via-emerald-100 to-white text-primary shadow-primary/20 ring-primary/30'
    },
    {
        icon: Share2,
        title: 'Social Media Design',
        description: 'Eye-catching graphics for all platforms',
        features: [
            'Facebook posts',
            'Instagram posts',
            'Promotional graphics',
            'Product advertisements',
            'Quote graphics'
        ],
        color: 'from-secondary/30 via-rose-100 to-white text-secondary shadow-secondary/20 ring-secondary/30'
    },
    {
        icon: Presentation,
        title: 'Presentation Design',
        description: 'Professional presentations that captivate',
        features: [
            'Business presentations',
            'Educational presentations',
            'Pitch decks',
            'Company profiles'
        ],
        color: 'from-sky-200 via-cyan-100 to-white text-sky-700 shadow-sky-200/60 ring-sky-200/60'
    },
    {
        icon: Briefcase,
        title: 'Virtual Assistance',
        description: 'Reliable administrative support',
        features: [
            'Data entry',
            'Email management',
            'Internet research',
            'Calendar management',
            'File organization'
        ],
        color: 'from-amber-200 via-orange-100 to-white text-amber-700 shadow-amber-200/60 ring-amber-200/60'
    },
    {
        icon: Sparkles,
        title: 'AI-Powered Support',
        description: 'Leveraging AI for enhanced productivity',
        features: [
            'ChatGPT',
            'Gemini',
            'Canva AI',
            'Grammarly',
            'Content generation',
            'Workflow automation'
        ],
        color: 'from-primary/25 via-emerald-100 to-white text-primary shadow-primary/20 ring-primary/30'
    }
];

export function Services() {
    return (
        <section id="services" className="py-24 px-4 bg-accent/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                        Services I Offer
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Professional support to help your business thrive
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="h-full bg-card rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg ring-1 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                    <service.icon className="w-7 h-7 drop-shadow-sm" strokeWidth={2.2} />
                                </div>

                                <h3 className="text-xl mb-3 text-foreground">
                                    {service.title}
                                </h3>

                                <p className="text-muted-foreground mb-6">
                                    {service.description}
                                </p>

                                <ul className="space-y-2">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{feature}</span>
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
