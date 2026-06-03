import { Heart } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-4 bg-accent/50 border-t border-border">
            <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-6">
                    <div className="space-y-2">
                        <p className="text-lg text-foreground flex items-center justify-center gap-2">
                            Thank you for visiting my portfolio
                            <Heart className="w-5 h-5 text-secondary fill-secondary" />
                        </p>
                        <p className="text-muted-foreground">
                            Available for freelance, part-time, and full-time opportunities
                        </p>
                    </div>

                    <div className="pt-6 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} Fiona Mae Santos. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
