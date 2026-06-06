import { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
    BriefcaseBusiness,
    Building2,
    ChevronLeft,
    ChevronRight,
    FolderOpen,
    GraduationCap,
    Megaphone
} from 'lucide-react';

const socialMediaGraphics = [
    {
        url: '/social-graphics/small-steps.jpg',
        title: 'Motivational Quote Graphic'
    },
    {
        url: '/social-graphics/mind-body-soul.jpg',
        title: 'Wellness Brand Post'
    },
    {
        url: '/social-graphics/wellness-reminder.jpg',
        title: 'Reminder Checklist Graphic'
    },
    {
        url: '/social-graphics/spring-sale.jpg',
        title: 'Promotional Sale Graphic'
    },
    {
        url: '/social-graphics/client-love.jpg',
        title: 'Client Testimonial Post'
    },
    {
        url: '/social-graphics/weekend-workshop.jpg',
        title: 'Workshop Announcement Graphic'
    }
];

const templateExamples = [
    {
        before: '/coffee-sale-after.jpg',   // replace with your actual before image
        after: '/coffee-sale-before.jpg',   // replace with your actual after image
        title: 'Brand Template Customization'
    }
];

const presentations = [
    {
        title: 'Business Overview',
        type: 'Corporate',
        description: 'Clean executive slides for company updates, strategy, and team reporting.',
        icon: BriefcaseBusiness,
        color: 'from-primary/25 via-emerald-100 to-white text-primary shadow-primary/20 ring-primary/30',
        tab: 'bg-primary'
    },
    {
        title: 'Educational Presentation',
        type: 'Education',
        description: 'Structured lesson decks with readable layouts and strong visual hierarchy.',
        icon: GraduationCap,
        color: 'from-secondary/30 via-rose-100 to-white text-secondary shadow-secondary/20 ring-secondary/30',
        tab: 'bg-secondary'
    },
    {
        title: 'Company Profile',
        type: 'Marketing',
        description: 'Polished brand story slides for introductions, proposals, and outreach.',
        icon: Building2,
        color: 'from-sky-200 via-cyan-100 to-white text-sky-700 shadow-sky-200/60 ring-sky-200/60',
        tab: 'bg-sky-400'
    },
    {
        title: 'Marketing Proposal',
        type: 'Sales',
        description: 'Persuasive proposal slides focused on offers, timelines, and next steps.',
        icon: Megaphone,
        color: 'from-amber-200 via-orange-100 to-white text-amber-700 shadow-amber-200/60 ring-amber-200/60',
        tab: 'bg-amber-400'
    }
];

export function Portfolio() {
    // Slider state
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        let x = clientX - rect.left;
        x = Math.min(Math.max(x, 0), rect.width);
        const percent = (x / rect.width) * 100;
        setSliderPosition(percent);
    }, []);

    const onMouseMove = useCallback((e: React.MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    }, [isDragging, handleMove]);

    const onTouchMove = useCallback((e: React.TouchEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const touch = e.touches[0];
        if (touch) handleMove(touch.clientX);
    }, [isDragging, handleMove]);

    const startDrag = () => setIsDragging(true);
    const stopDrag = () => setIsDragging(false);

    // Presentation design state
    const [isPresentationOpen, setIsPresentationOpen] = useState(false);
    const [selectedPresentation, setSelectedPresentation] = useState<number | null>(null);

    const togglePresentations = () => {
        setIsPresentationOpen((isOpen) => !isOpen);
        setSelectedPresentation(null);
    };

    const selectPresentation = (index: number) => {
        if (selectedPresentation === index) {
            setIsPresentationOpen(false);
            setSelectedPresentation(null);
            return;
        }
        setIsPresentationOpen(true);
        setSelectedPresentation(index);
    };

    return (
        <section id="portfolio" className="py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                        Portfolio
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A showcase of my creative work and attention to detail
                    </p>
                </motion.div>

                <div className="space-y-20">
                    {/* Presentation Design (unchanged) */}
                    <div id="presentation-design">
                        <h3 className="text-3xl font-serif text-foreground mb-8">
                            Presentation Design
                        </h3>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-accent/50 to-card p-6 md:p-8 shadow-sm"
                        >
                            <div className="relative min-h-[760px] lg:min-h-[430px]">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    animate={{
                                        x: isPresentationOpen ? '-122%' : '-50%',
                                        y: '-50%'
                                    }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.55, ease: 'easeOut' }}
                                    className="absolute left-1/2 top-[22%] z-20 min-h-[320px] w-full max-w-[430px] rounded-[2rem] border border-border bg-gradient-to-br from-white via-accent to-muted shadow-xl lg:top-1/2"
                                >
                                    <div className="absolute inset-x-8 top-8 h-16 rounded-t-[1.75rem] bg-primary/15"></div>
                                    <div className="absolute inset-x-6 top-14 h-16 rounded-t-[1.75rem] bg-secondary/20"></div>
                                    <div className="absolute inset-x-4 top-20 h-16 rounded-t-[1.75rem] bg-sky-100"></div>
                                    <div className="absolute inset-x-2 bottom-0 top-28 rounded-[2rem] border border-border bg-card shadow-lg">
                                        <div className="absolute left-1/2 top-0 h-12 w-24 -translate-x-1/2 rounded-b-full bg-gradient-to-b from-accent to-card"></div>
                                        <div className="flex h-full flex-col items-center justify-center px-8 text-center">
                                            <button
                                                type="button"
                                                onClick={togglePresentations}
                                                aria-label={isPresentationOpen ? 'Close presentation cards' : 'Open presentation cards'}
                                                className="group/folder mb-5 flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 via-emerald-100 to-white text-primary shadow-lg ring-1 ring-primary/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                                            >
                                                <FolderOpen className="h-8 w-8" strokeWidth={2.2} />
                                            </button>
                                            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Presentation Design</p>
                                            <p className="mt-2 font-serif text-2xl text-foreground">Focused slide decks</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <div className="absolute inset-x-0 bottom-0 min-h-[400px] lg:inset-y-0 lg:left-[50%] lg:right-0 lg:min-h-0">
                                    <div className="grid gap-4 lg:block">
                                        {presentations.map((item, index) => {
                                            const isSelected = selectedPresentation === index;
                                            const isVisible = isPresentationOpen && (selectedPresentation === null || isSelected);
                                            return (
                                                <motion.button
                                                    key={item.title}
                                                    type="button"
                                                    onClick={() => selectPresentation(index)}
                                                    initial={false}
                                                    animate={{
                                                        opacity: isVisible ? 1 : 0,
                                                        x: isVisible ? 0 : -220,
                                                        scale: isVisible ? 1 : 0.82,
                                                        rotate: isVisible ? 0 : -4
                                                    }}
                                                    transition={{ duration: 0.45, delay: isVisible ? index * 0.06 : 0, ease: 'easeOut' }}
                                                    className="group text-left lg:absolute lg:left-0 w-full lg:max-w-[520px] outline-none"
                                                    style={{
                                                        top: `${selectedPresentation === null ? index * 76 : 102}px`,
                                                        zIndex: isVisible ? presentations.length + index + 20 : presentations.length + index,
                                                        pointerEvents: isVisible ? 'auto' : 'none'
                                                    }}
                                                >
                                                    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:translate-x-3 group-hover:shadow-2xl group-focus-visible:-translate-y-2 group-focus-visible:translate-x-3 group-focus-visible:shadow-2xl">
                                                        <div className={`absolute left-0 top-0 h-full w-2 ${item.tab}`}></div>
                                                        <div className="flex items-start gap-4">
                                                            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg ring-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-focus-visible:scale-110 group-focus-visible:rotate-3`}>
                                                                <item.icon className="h-7 w-7" strokeWidth={2.2} />
                                                            </div>
                                                            <div>
                                                                <p className="mb-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.type}</p>
                                                                <h4 className="text-xl text-foreground">{item.title}</h4>
                                                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Canva Template Editing – now right‑aligned, not centered */}
                    <div id="canva-template-editing">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left: description */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className="text-3xl font-serif text-foreground mb-6">
                                    Canva Template Editing
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    Transform your Canva templates with professional edits:
                                    replace text, swap images, and apply brand colors seamlessly.
                                </p>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-primary" />
                                        <span>Text replacement & customization</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-secondary" />
                                        <span>Image replacement & positioning</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-primary" />
                                        <span>Brand color application</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Right: portrait slider – right‑aligned (no centering) */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex justify-end"   // ← changed from justify-center to justify-end
                            >
                                <div className="w-full max-w-lg">
                                    <div
                                        ref={containerRef}
                                        className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-accent select-none touch-none cursor-ew-resize"
                                        onMouseMove={onMouseMove}
                                        onMouseDown={startDrag}
                                        onMouseUp={stopDrag}
                                        onMouseLeave={stopDrag}
                                        onTouchMove={onTouchMove}
                                        onTouchStart={startDrag}
                                        onTouchEnd={stopDrag}
                                    >
                                        <ImageWithFallback
                                            src={templateExamples[0].before}
                                            alt="Before"
                                            className="absolute inset-0 w-full h-full object-fit"
                                        />
                                        <div
                                            className="absolute inset-0 overflow-hidden"
                                            style={{ width: `${sliderPosition}%` }}
                                        >
                                            <ImageWithFallback
                                                src={templateExamples[0].after}
                                                alt="After"
                                                className="absolute inset-0 w-full h-full object-fit"
                                            />
                                        </div>
                                        <div
                                            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
                                            style={{ left: `${sliderPosition}%` }}
                                        >
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                                                <ChevronLeft className="w-3 h-3 absolute left-1" />
                                                <ChevronRight className="w-3 h-3 absolute right-1" />
                                            </div>
                                        </div>
                                        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                                            Before
                                        </div>
                                        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                                            After
                                        </div>
                                    </div>
                                    <div className="mt-6 text-center">
                                        <p className="text-muted-foreground text-sm">
                                            Drag the slider to see the transformation
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Social Media Graphics (unchanged) */}
                    <div id="social-media-graphics">
                        <h3 className="text-3xl font-serif text-foreground mb-8">
                            Social Media Graphics
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {socialMediaGraphics.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative aspect-[1.07/1] rounded-2xl overflow-hidden bg-card shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-border"
                                >
                                    <ImageWithFallback
                                        src={item.url}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <p className="text-white">{item.title}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}