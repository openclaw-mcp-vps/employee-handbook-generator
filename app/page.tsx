export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          HR Compliance Made Simple
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Generate Compliant<br />
          <span className="text-[#58a6ff]">Employee Handbooks</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Answer a short questionnaire and get a state-specific employee handbook with all required policies and legal language — ready to download as a PDF in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start for $19/mo
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            See How It Works
          </a>
        </div>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to preview. Cancel anytime.</p>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Answer Questions", desc: "Fill out a guided questionnaire about your business, state, and policies." },
            { step: "2", title: "We Generate It", desc: "Our system builds a state-compliant handbook with all required legal language." },
            { step: "3", title: "Download PDF", desc: "Get a professional, ready-to-use employee handbook as a downloadable PDF." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-center">
              <div className="w-10 h-10 bg-[#58a6ff]/10 text-[#58a6ff] rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-[#8b949e] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
          <h3 className="text-white text-xl font-bold mb-2">Pro Plan</h3>
          <div className="text-5xl font-bold text-white mb-1">
            $19<span className="text-xl text-[#8b949e] font-normal">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need for HR compliance</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited handbook generations",
              "All 50 states supported",
              "PDF download included",
              "Legal language auto-updated",
              "Up to 50 employees",
              "Email support"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Is the handbook legally compliant for my state?",
              a: "Yes. Our templates are built with state-specific labor laws and are updated regularly to reflect new legislation. We cover all 50 US states."
            },
            {
              q: "How long does it take to generate a handbook?",
              a: "Most users complete the questionnaire in under 10 minutes. Your handbook is generated instantly and available for download right away."
            },
            {
              q: "Can I edit the handbook after it's generated?",
              a: "Absolutely. You receive a fully editable PDF and document file so you can customize it to fit your company culture and specific needs."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} HandbookAI. All rights reserved.</p>
      </footer>
    </main>
  );
}
