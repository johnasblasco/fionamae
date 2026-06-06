import { motion } from 'motion/react';
import { Award, BriefcaseBusiness, HeartHandshake, UsersRound } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
    {
        value: '1+',
        label: 'Years Experience',
        icon: Award,
        color: 'from-green-200 via-emerald-100 to-white text-green-700 shadow-green-200 ring-emerald/30'
    },
    {
        value: '100+',
        label: 'Projects Completed',
        icon: BriefcaseBusiness,
        color: 'from-pink-200 via-rose-100 to-white text-pink-700 shadow-pink-200 ring-pink/30'
    },
    {
        value: '50+',
        label: 'Happy Clients',
        icon: UsersRound,
        color: 'from-sky-200 via-cyan-100 to-white text-sky-700 shadow-sky-200/60 ring-sky-200/60'
    },
    {
        value: '96%',
        label: 'Client Satisfaction',
        icon: HeartHandshake,
        color: 'from-amber-200 via-orange-100 to-white text-amber-700 shadow-amber-200/60 ring-amber-200/60'
    }
];

export function About() {
    return (
        <section id="about" className="py-24 px-4 bg-accent/50">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-accent">
                            <ImageWithFallback
                                src="/about.jpg"
                                alt="About Fiona Mae Santos"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary rounded-full blur-3xl opacity-20"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div>
                            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                                About Me
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                I am a detail-oriented Virtual Assistant with strong Canva skills and experience
                                using AI tools to improve productivity and efficiency.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I am highly organized, quick to learn, and committed to delivering accurate and
                                high-quality work. I enjoy helping businesses streamline their operations while
                                maintaining professional and visually appealing content.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-6">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="group bg-card rounded-xl p-4 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <stat.icon className="w-6 h-6" strokeWidth={2.2} />
                                    </div>
                                    <div className="text-3xl text-foreground mb-1">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
