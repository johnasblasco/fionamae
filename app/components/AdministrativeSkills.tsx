import { motion } from 'motion/react';
import {
    FileText,
    Table,
    Mail,
    Database,
    Search,
    Calendar,
    FolderOpen,
    FileEdit
} from 'lucide-react';

const skills = [
    { name: 'Microsoft Word', icon: FileText, color: 'from-primary/25 via-emerald-100 to-white text-primary shadow-primary/20 ring-primary/30' },
    { name: 'Excel', icon: Table, color: 'from-secondary/30 via-rose-100 to-white text-secondary shadow-secondary/20 ring-secondary/30' },
    { name: 'Google Sheets', icon: Table, color: 'from-sky-200 via-cyan-100 to-white text-sky-700 shadow-sky-200/60 ring-sky-200/60' },
    { name: 'Google Docs', icon: FileText, color: 'from-amber-200 via-orange-100 to-white text-amber-700 shadow-amber-200/60 ring-amber-200/60' },
    { name: 'Email Management', icon: Mail, color: 'from-primary/25 via-emerald-100 to-white text-primary shadow-primary/20 ring-primary/30' },
    { name: 'Data Entry', icon: Database, color: 'from-secondary/30 via-rose-100 to-white text-secondary shadow-secondary/20 ring-secondary/30' },
    { name: 'Internet Research', icon: Search, color: 'from-sky-200 via-cyan-100 to-white text-sky-700 shadow-sky-200/60 ring-sky-200/60' },
    { name: 'Calendar Management', icon: Calendar, color: 'from-amber-200 via-orange-100 to-white text-amber-700 shadow-amber-200/60 ring-amber-200/60' },
    { name: 'File Organization', icon: FolderOpen, color: 'from-primary/25 via-emerald-100 to-white text-primary shadow-primary/20 ring-primary/30' },
    { name: 'Document Formatting', icon: FileEdit, color: 'from-secondary/30 via-rose-100 to-white text-secondary shadow-secondary/20 ring-secondary/30' }
];

export function AdministrativeSkills() {
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
                        Administrative Skills
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive administrative expertise to support your business operations
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group"
                        >
                            <div className="bg-card rounded-xl p-6 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30">
                                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${skill.color} shadow-md ring-1 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                                    <skill.icon className="w-6 h-6 drop-shadow-sm" strokeWidth={2.2} />
                                </div>
                                <p className="text-sm text-foreground">{skill.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
