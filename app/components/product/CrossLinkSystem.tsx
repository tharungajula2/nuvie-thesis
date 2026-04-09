import React from 'react';
import Link from 'next/link';
import { Product } from '../../types';
import { products } from '../../data/products';

interface CrossLinkSystemProps {
    currentProduct: Product;
}

export const CrossLinkSystem: React.FC<CrossLinkSystemProps> = ({ currentProduct }) => {
    // Logic: Find 2 other products to link to. 
    // In a real DB this would be driven by adjacency logic. Here we take the next two in the array, wrapping around.
    const currentIndex = products.findIndex(p => p.id === currentProduct.id);
    const related1 = products[(currentIndex + 1) % products.length];
    const related2 = products[(currentIndex + 2) % products.length];

    const relatedProducts = [related1, related2];

    return (
        <section className="py-32 px-6 border-t border-foreground/5 bg-graphite/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/30 block mb-4">
                        Portfolio Adjacency
                    </span>
                    <h3 className="text-3xl font-serif">Explore the System</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {relatedProducts.map(product => (
                        <Link 
                            key={product.id} 
                            href={`/products/${product.slug}`}
                            className="group relative overflow-hidden rounded-3xl border border-foreground/5 bg-background p-8 md:p-12 hover:border-gold/30 transition-all duration-500 flex flex-col justify-between min-h-[300px]"
                        >
                            <div 
                                className="absolute top-0 right-0 w-64 h-64 blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                                style={{ backgroundColor: product.themeColor }}
                            />
                            
                            <div className="relative z-10">
                                <span className="text-[9px] uppercase tracking-widest font-bold px-3 py-1 bg-foreground/5 rounded-full text-foreground/40 mb-6 inline-block">
                                    {product.format} Element
                                </span>
                                <h4 className="text-3xl font-serif text-foreground group-hover:text-gold transition-colors mb-4">{product.name}</h4>
                                <p className="text-foreground/50 font-light italic max-w-sm">"{product.heroDescriptor}"</p>
                            </div>

                            <div className="relative z-10 mt-12 flex items-center space-x-4">
                                <span className="h-px w-8 bg-foreground/20 group-hover:w-16 group-hover:bg-gold/50 transition-all duration-500" />
                                <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/40 group-hover:text-gold transition-colors">
                                    Analyze SKU
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
