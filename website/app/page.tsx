const REPO = 'https://github.com/PenelopePoi/soul-and-sentence';
const EMAIL = 'soulnsentence@gmail.com';
const PHONE = '(321) 375-9685';
const ADDRESS = '766 Lunar Lake Circle, Cocoa, FL 32922';

export default function Home(): React.ReactElement {
    return (
        <main className="min-h-screen">
            <Hero />
            <Program />
            <HowItWorks />
            <Involve />
            <Address />
            <Footer />
        </main>
    );
}

function Hero(): React.ReactElement {
    return (
        <section className="border-b border-ink-200 bg-ink-50">
            <div className="mx-auto max-w-4xl px-6 py-24">
                <p className="text-sm font-semibold tracking-[0.3em] text-brass-600">
                    SOUL &amp; SENTENCE · REDEMPTION BY THE PEN
                </p>
                <h1 className="mt-8 font-serif text-5xl leading-tight text-ink-900 sm:text-6xl">
                    Your sentence is time.<br />
                    Your soul is yours.<br />
                    <span className="text-brass-600">Use the pen to find what the world tried to take.</span>
                </h1>
                <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-700">
                    Soul &amp; Sentence is a creative writing program for incarcerated individuals — a 33-section workbook
                    covering legal education, GED preparation, therapeutic healing, and reentry planning. We send materials
                    directly to people inside. There is no enrollment fee. There is no waitlist. If you are incarcerated and
                    you want to write, you are already a member.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                    <a href="#involve"
                       className="rounded-md bg-ink-900 px-6 py-3 text-sm font-semibold tracking-wide text-ink-50 hover:bg-ink-700">
                        How to get involved
                    </a>
                    <a href={REPO}
                       className="rounded-md border border-ink-700 px-6 py-3 text-sm font-semibold tracking-wide text-ink-900 hover:bg-ink-100">
                        Read the workbook
                    </a>
                </div>
                <p className="mt-8 text-sm italic text-ink-500">
                    Founded by Alex Weatherspoon · Cocoa, FL · Planned 501(c)(3) nonprofit
                </p>
            </div>
        </section>
    );
}

const PARTS: { title: string; body: string }[] = [
    { title: 'Legal Education',     body: 'Constitutional rights, 4th-Amendment searches, due process, all 27 amendments, Florida case law, civil-rights §1983, pro se filing, grievance procedures.' },
    { title: 'GED Preparation',     body: 'Math, language arts and reading comprehension, science fundamentals, social studies and civics. Foundations — not tricks.' },
    { title: 'Legal Glossary',      body: 'Over 100 essential legal terms. The vocabulary of the system you are in. If you don\u2019t know the words, you can\u2019t fight the fight.' },
    { title: 'Therapeutic Growth',  body: 'Shadow work, inner-child healing, parenting from the inside, faith, addiction recovery, anger management, relationships and boundaries.' },
    { title: 'Reentry Preparation', body: 'Financial literacy, job readiness and fair-chance employers, reentry planning and transition preparation.' },
    { title: 'Legal Process',       body: 'Bail, bonds and pretrial procedures. Sentence computation and gain time. Know what is being calculated in your name.' },
    { title: 'Accountability',      body: 'Owning your story without drowning in guilt. Three layers: acknowledgment, understanding, action. Restorative accountability.' },
    { title: 'Mental Health',       body: 'Depression, anxiety, PTSD, bipolar, ADHD. Coping strategies that work. Crisis resources. Your mind is the foundation.' },
    { title: 'Resources',           body: 'Thirty-plus reentry, legal aid, and mental-health organizations. Phone numbers and hotlines that can save your life.' },
    { title: 'Reflection',          body: 'Final commitment statement. Six sentences in your own words. Signed with your name. Dated. Yours to keep.' },
    { title: 'Conflict & Creativity', body: 'Trauma-informed conflict resolution. Creative expression as healing — poetry, drawing, songwriting. Digital literacy for reentry.' },
];

function Program(): React.ReactElement {
    return (
        <section className="border-b border-ink-200 bg-ink-100">
            <div className="mx-auto max-w-5xl px-6 py-24">
                <h2 className="font-serif text-4xl text-ink-900">The Program — 33 sections</h2>
                <p className="mt-4 max-w-2xl text-ink-700">
                    Twelve writing prompts. Three reflection exercises. Eleven thematic parts. Worked at your pace. No grade, no deadline,
                    no judgment. The only question is: <em>did you tell the truth?</em>
                </p>
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {PARTS.map(p => (
                        <div key={p.title} className="rounded-lg border border-ink-200 bg-ink-50 p-6">
                            <h3 className="font-serif text-xl text-brass-600">{p.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-ink-700">{p.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const STEPS: { n: string; title: string; body: string }[] = [
    { n: '1', title: 'Receive your prompts',   body: 'A workbook and a set of writing prompts are mailed or handed to any incarcerated person who asks. No application. No cost. You work through them at your own pace.' },
    { n: '2', title: 'Write without filter',   body: 'No word count. No format. No grade. Full sentences or fragments. A letter, a poem, a rant, a list. The only rule is honesty.' },
    { n: '3', title: 'Reflect and revisit',    body: 'After you write, let it sit. Come back the next day. Read it like someone else wrote it. Truth reveals itself in layers.' },
    { n: '4', title: 'Submit — if you choose', body: 'Voluntary. Accepted pieces appear in our anthology, a published collection of writing from inside. Contributors receive copies and a small honorarium.' },
    { n: '5', title: 'Community — where possible', body: 'In facilities that allow group programming, Soul & Sentence facilitates writing circles. Reading aloud is always optional. Pass is a complete sentence.' },
];

function HowItWorks(): React.ReactElement {
    return (
        <section className="border-b border-ink-200 bg-ink-50">
            <div className="mx-auto max-w-4xl px-6 py-24">
                <h2 className="font-serif text-4xl text-ink-900">How it works</h2>
                <ol className="mt-12 space-y-10">
                    {STEPS.map(s => (
                        <li key={s.n} className="flex gap-8">
                            <span className="font-serif text-5xl text-brass-500">{s.n}</span>
                            <div>
                                <h3 className="font-serif text-2xl text-ink-900">{s.title}</h3>
                                <p className="mt-2 text-ink-700">{s.body}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

const PATHS: { title: string; body: string; cta: string; href: string }[] = [
    {
        title: 'Incarcerated writer',
        body: 'Mail us at the address below. A workbook and prompts will be sent directly to you. No charge. No application.',
        cta: 'See the address',
        href: '#address',
    },
    {
        title: 'Correctional facility',
        body: 'Read the one-page program introduction letter we send to wardens. It explains what we provide, what we ask for, and what we do not do.',
        cta: 'Program letter to wardens',
        href: `${REPO}/blob/main/operations/letter-to-wardens.md`,
    },
    {
        title: 'Volunteer facilitator',
        body: 'Run a 60-minute writing circle inside a facility. Read the full facilitation guide before your first session — response rules, confidentiality, safety.',
        cta: 'Facilitation guide',
        href: `${REPO}/blob/main/operations/writing-circle-facilitation-guide.md`,
    },
    {
        title: 'Anthology contributor',
        body: 'Submit up to 5 pieces per cycle: poetry, prose, hybrid. Contributors keep full copyright. Published pieces receive a $25 honorarium and 3 anthology copies.',
        cta: 'Submission guidelines',
        href: `${REPO}/blob/main/operations/anthology-submission-guidelines.md`,
    },
    {
        title: 'Donor',
        body: 'Your gift prints and mails workbooks, funds the anthology, and supports in-facility writing circles. $25 sends one workbook. $10,000 funds a year of operations.',
        cta: 'Donor appeal letter',
        href: `${REPO}/blob/main/fundraising/donor-appeal-letter.md`,
    },
    {
        title: 'Grant officer',
        body: 'Current legal status is planned 501(c)(3) in Florida; fiscal sponsorship arrangements available. Formation checklist tracks progress.',
        cta: '501(c)(3) formation status',
        href: `${REPO}/blob/main/legal/501c3-formation-checklist-florida.md`,
    },
];

function Involve(): React.ReactElement {
    return (
        <section id="involve" className="border-b border-ink-200 bg-ink-100">
            <div className="mx-auto max-w-5xl px-6 py-24">
                <h2 className="font-serif text-4xl text-ink-900">How to get involved</h2>
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {PATHS.map(p => (
                        <div key={p.title} className="flex flex-col rounded-lg border border-ink-200 bg-ink-50 p-6">
                            <h3 className="font-serif text-xl text-brass-600">{p.title}</h3>
                            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">{p.body}</p>
                            <a href={p.href} className="mt-6 text-sm font-semibold text-ink-900 hover:text-brass-600">
                                {p.cta} &rarr;
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Address(): React.ReactElement {
    return (
        <section id="address" className="border-b border-ink-200 bg-ink-900 text-ink-50">
            <div className="mx-auto max-w-4xl px-6 py-24">
                <h2 className="font-serif text-4xl">Contact</h2>
                <p className="mt-6 max-w-2xl text-ink-200">
                    For incarcerated writers — send a letter. For facility coordinators, volunteers, or donors — email or call.
                </p>
                <dl className="mt-12 grid gap-6 sm:grid-cols-3">
                    <div>
                        <dt className="text-xs tracking-[0.2em] text-brass-400">ADDRESS</dt>
                        <dd className="mt-2 font-serif text-lg">{ADDRESS}</dd>
                    </div>
                    <div>
                        <dt className="text-xs tracking-[0.2em] text-brass-400">EMAIL</dt>
                        <dd className="mt-2 font-serif text-lg">
                            <a href={`mailto:${EMAIL}`} className="hover:text-brass-400">{EMAIL}</a>
                        </dd>
                    </div>
                    <div>
                        <dt className="text-xs tracking-[0.2em] text-brass-400">PHONE</dt>
                        <dd className="mt-2 font-serif text-lg">
                            <a href={`tel:${PHONE.replace(/[^0-9]/g, '')}`} className="hover:text-brass-400">{PHONE}</a>
                        </dd>
                    </div>
                </dl>
            </div>
        </section>
    );
}

function Footer(): React.ReactElement {
    return (
        <footer className="bg-ink-900 text-ink-500">
            <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-6 py-10 text-sm sm:flex-row sm:justify-between sm:items-center">
                <div>
                    &copy; {new Date().getFullYear()} Alex Weatherspoon &middot; Soul &amp; Sentence &middot; Cocoa, FL
                </div>
                <div className="flex items-center gap-6">
                    <a href={REPO} className="hover:text-brass-400">Repository</a>
                    <a href={`${REPO}/blob/main/LICENSE`} className="hover:text-brass-400">License</a>
                    <a href={`${REPO}/tree/main/workbook`} className="hover:text-brass-400">Workbook</a>
                </div>
            </div>
            <div className="mx-auto max-w-5xl px-6 pb-10 text-xs italic text-ink-500">
                &ldquo;No one can discover you until you discover yourself. The pen is the first map.&rdquo;
            </div>
        </footer>
    );
}
