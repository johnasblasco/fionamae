import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const socialMediaGraphics = [
    {
        url: 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGdyYXBoaWNzJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc4MDQ1NzY4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Social Media Campaign'
    },
    {
        url: 'https://images.unsplash.com/photo-1665470909905-129dada26242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzb2NpYWwlMjBtZWRpYSUyMGdyYXBoaWNzJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc4MDQ1NzY4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Brand Content'
    },
    {
        url: 'https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzb2NpYWwlMjBtZWRpYSUyMGdyYXBoaWNzJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc4MDQ1NzY4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Product Ads'
    },
    {
        url: 'https://images.unsplash.com/photo-1665470909901-162912ec16f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzb2NpYWwlMjBtZWRpYSUyMGdyYXBoaWNzJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc4MDQ1NzY4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Promotional Posts'
    },
    {
        url: 'https://images.unsplash.com/photo-1609406316383-64330d0c6ca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzb2NpYWwlMjBtZWRpYSUyMGdyYXBoaWNzJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc4MDQ1NzY4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Instagram Stories'
    },
    {
        url: 'https://images.unsplash.com/photo-1667312939978-64cf31718a6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwb2ZmaWNlJTIwYWVzdGhldGljJTIwYmVpZ2V8ZW58MXx8fHwxNzgwNDU3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Quote Graphics'
    }
];

const templateExamples = [
    {
        before: 'https://images.unsplash.com/photo-1601642964568-1917224f4e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwb2ZmaWNlJTIwYWVzdGhldGljJTIwYmVpZ2V8ZW58MXx8fHwxNzgwNDU3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        after: 'https://images.unsplash.com/photo-1719760518176-e124a5bcd025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwb2ZmaWNlJTIwYWVzdGhldGljJTIwYmVpZ2V8ZW58MXx8fHwxNzgwNDU3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Brand Template Customization'
    }
];

const presentations = [
    { title: 'Business Overview', type: 'Corporate' },
    { title: 'Educational Presentation', type: 'Education' },
    { title: 'Company Profile', type: 'Marketing' },
    { title: 'Marketing Proposal', type: 'Sales' }
];

export function Portfolio() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    };

    return (
        <section id="portfolio" className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
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
                    <div>
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
                                    className="group relative aspect-square rounded-2xl overflow-hidden bg-accent"
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

                    <div>
                        <h3 className="text-3xl font-serif text-foreground mb-8">
                            Canva Template Editing
                        </h3>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div
                                className="relative aspect-video rounded-2xl overflow-hidden bg-accent select-none cursor-ew-resize"
                                onMouseMove={handleSliderChange}
                                onMouseDown={() => setIsDragging(true)}
                                onMouseUp={() => setIsDragging(false)}
                                onMouseLeave={() => setIsDragging(false)}
                            >
                                <ImageWithFallback
                                    src={templateExamples[0].before}
                                    alt="Before"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                <div
                                    className="absolute inset-0 overflow-hidden"
                                    style={{ width: `${sliderPosition}%` }}
                                >
                                    <ImageWithFallback
                                        src={templateExamples[0].after}
                                        alt="After"
                                        className="absolute inset-0 w-full h-full object-cover"
                                        style={{ width: `${(100 / sliderPosition) * 100}%` }}
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
                                <p className="text-muted-foreground">
                                    Drag the slider to see the transformation
                                </p>
                                <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
                                    <span className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-primary"></span>
                                        Text replacement
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-secondary"></span>
                                        Image replacement
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-primary"></span>
                                        Brand color application
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div>
                        <h3 className="text-3xl font-serif text-foreground mb-8">
                            Presentation Design
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {presentations.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 border border-border"
                                >
                                    <div>
                                        <div className="text-xs text-muted-foreground mb-2">{item.type}</div>
                                        <h4 className="text-lg text-foreground">{item.title}</h4>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-primary">
                                        <span>View Project</span>
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
