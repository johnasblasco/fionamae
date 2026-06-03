import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
                                src="https://images.unsplash.com/photo-1770626894265-bdb99db109f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHdvcmtzcGFjZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzgwNDU3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
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
                            <div className="bg-card rounded-xl p-4 border border-border">
                                <div className="text-3xl text-primary mb-2">5+</div>
                                <div className="text-sm text-muted-foreground">Years Experience</div>
                            </div>
                            <div className="bg-card rounded-xl p-4 border border-border">
                                <div className="text-3xl text-secondary mb-2">100+</div>
                                <div className="text-sm text-muted-foreground">Projects Completed</div>
                            </div>
                            <div className="bg-card rounded-xl p-4 border border-border">
                                <div className="text-3xl text-primary mb-2">50+</div>
                                <div className="text-sm text-muted-foreground">Happy Clients</div>
                            </div>
                            <div className="bg-card rounded-xl p-4 border border-border">
                                <div className="text-3xl text-secondary mb-2">98%</div>
                                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
