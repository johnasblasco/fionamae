import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="inline-block px-4 py-2 bg-accent rounded-full mb-4">
                            <span className="text-sm text-muted-foreground">Virtual Assistant & Designer</span>
                        </div>

                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight">
                            Fiona Mae Santos
                        </h1>

                        <div className="space-y-2">
                            <p className="text-xl md:text-2xl text-primary">
                                Virtual Assistant | Canva Designer | AI Tools User
                            </p>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I help businesses stay organized, productive, and visually engaging through
                            administrative support, Canva design, and AI-powered workflows.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button
                                onClick={() => scrollToSection('portfolio')}
                                className="group px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 flex items-center gap-2"
                            >
                                View Portfolio
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button
                                onClick={() => scrollToSection('contact')}
                                className="px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2"
                            >
                                <Mail className="w-5 h-5" />
                                Hire Me
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-square rounded-3xl overflow-hidden bg-accent">
                            <ImageWithFallback
                                src="/hero.png"
                                alt="Fiona Mae Santos - Professional Virtual Assistant"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                        </div>

                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-30"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-30"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
