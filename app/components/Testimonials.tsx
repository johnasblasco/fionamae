import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Marketing Director',
        company: 'TechStart Inc.',
        rating: 5,
        text: 'Fiona transformed our social media presence with her incredible Canva designs. Her attention to detail and quick turnaround time exceeded our expectations.',
        avatar: 'SJ',
        color: 'from-primary/25 via-emerald-100 to-white text-primary shadow-primary/20 ring-primary/30',
        avatarColor: 'from-rose-500 to-amber-400'
    },
    {
        name: 'Michael Chen',
        role: 'CEO',
        company: 'GrowthHub',
        rating: 5,
        text: 'Working with Fiona has been a game-changer for our team. Her administrative support and AI-powered workflows have significantly improved our productivity.',
        avatar: 'MC',
        color: 'from-secondary/30 via-rose-100 to-white text-secondary shadow-secondary/20 ring-secondary/30',
        avatarColor: 'from-sky-500 to-emerald-400'
    },
    {
        name: 'Emily Rodriguez',
        role: 'Small Business Owner',
        company: 'Bloom & Co.',
        rating: 5,
        text: 'Fiona is professional, reliable, and incredibly talented. She helped us create stunning presentations and manage our day-to-day operations seamlessly.',
        avatar: 'ER',
        color: 'from-sky-200 via-cyan-100 to-white text-sky-700 shadow-sky-200/60 ring-sky-200/60',
        avatarColor: 'from-violet-500 to-fuchsia-400'
    }
];

export function Testimonials() {
    return (
        <section className="py-24 px-4 bg-accent/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                        Client Testimonials
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        What my clients say about working with me
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="h-full bg-card rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30 relative">
                                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${testimonial.color} shadow-md ring-1 flex items-center justify-center absolute top-6 right-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                    <Quote className="w-4 h-4 drop-shadow-sm" strokeWidth={2.2} />
                                </div>

                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-sm" />
                                    ))}
                                </div>

                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    &ldquo;{testimonial.text}&rdquo;
                                </p>

                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.avatarColor} shadow-md flex items-center justify-center text-white ring-2 ring-white/80`}>
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <p className="text-foreground">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role}, {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
