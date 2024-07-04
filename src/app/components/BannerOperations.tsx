import React from 'react';
import Image from 'next/image';

export function OperationsBanner() {
return (
    <section className="w-full relative">
        <div className="aspect-[16/9] md:aspect-[16/9] lg:aspect-[16/9] max-h-[690px] w-full relative">
            <Image
                src="/banner_operaciones.jpg"
                alt="Operaciones de RD Transportes"
                fill
                style={{ objectFit: 'cover' }}
                priority
            />
        </div>
    </section>
);
}