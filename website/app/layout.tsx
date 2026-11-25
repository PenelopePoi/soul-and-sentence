import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    metadataBase: new URL('https://soulnsentence.org'),
    title: 'Soul & Sentence — Repentance by the Pen',
    description:
        'A creative writing program for incarcerated individuals. A 33-section workbook — legal education, GED prep, therapeutic healing, reentry planning. Free, direct to the facility. Founded by Alex Weatherspoon.',
    applicationName: 'Soul & Sentence',
    authors: [{ name: 'Alex Weatherspoon' }],
    keywords: [
        'prison writing program', 'incarcerated writers', 'reentry', 'legal literacy',
        'GED', 'anthology', 'creative writing', 'nonprofit', 'Florida', 'Soul and Sentence',
    ],
    openGraph: {
        title: 'Soul & Sentence — Repentance by the Pen',
        description:
            'A creative writing program for incarcerated individuals. 33-section workbook. Anthology of incarcerated writers. Free. Direct to the facility.',
        url: 'https://soulnsentence.org',
        siteName: 'Soul & Sentence',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Soul & Sentence — Repentance by the Pen',
        description:
            'Writing prompts and a 33-section workbook for incarcerated individuals. Free. Anthology of published writers inside.',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.ReactElement {
    return (
        <html lang="en">
            <body className="bg-ink-50 text-ink-900 font-sans">
                {children}
            </body>
        </html>
    );
}
