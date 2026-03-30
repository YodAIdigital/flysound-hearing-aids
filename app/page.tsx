export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <svg className="logo-icon" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" fill="#1e40af"/>
              <path d="M10 16c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="16" cy="16" r="3" fill="white"/>
            </svg>
            Flysound
          </div>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#cta" className="btn-primary">Free Trial</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div>
              <h1>Hear Every <span>Moment</span>, Live Every Moment</h1>
              <p className="hero-subtitle">Flysound hearing aids deliver crystal-clear sound, all-day comfort, and discreet design — so you never miss the conversations that matter most.</p>
              <div className="hero-cta">
                <a href="#cta" className="btn-primary">Start Your Free Trial</a>
                <a href="#how-it-works" className="btn-secondary">How It Works</a>
              </div>
            </div>
            <div className="hero-image">
              <svg className="hero-device" viewBox="0 0 300 350" fill="none">
                <ellipse cx="150" cy="175" rx="120" ry="150" fill="#f1f5f9" stroke="#1e40af" strokeWidth="3"/>
                <ellipse cx="150" cy="175" rx="80" ry="100" fill="#e0f2fe" stroke="#1e40af" strokeWidth="2"/>
                <circle cx="150" cy="175" r="30" fill="#1e40af"/>
                <circle cx="150" cy="175" r="15" fill="white"/>
                <path d="M150 120 L150 80" stroke="#1e40af" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="150" cy="70" r="8" fill="#06b6d4"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <div className="trust-banner">
        <span>✓ Trusted by 50,000+ users</span>
        <span>★ 4.9 Average Rating</span>
        <span>✓ 30-Day Money-Back Guarantee</span>
      </div>

      {/* Problem Section */}
      <section className="problem">
        <div className="container">
          <h2 className="section-title">Tired of Asking "What Did You Say?"</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <h3>You're Not Alone</h3>
              <p>Hearing loss affects more than your ears — it affects your relationships, confidence, and quality of life. You find yourself nodding along in conversations, avoiding social gatherings, and turning up the TV until family members complain.</p>
            </div>
            <div className="problem-card">
              <h3>The Solution Is Here</h3>
              <p>Flysound hearing aids are designed to give you back the sounds you've been missing — from the punchline of a joke to the whispered "I love you" from a grandchild. Experience the joy of hearing clearly again.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Why 50,000+ People Choose Flysound</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔊</div>
              <h3>Crystal Clear Sound</h3>
              <p>Advanced digital processing separates speech from background noise, so you hear conversations clearly even in crowded restaurants.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👁️</div>
              <h3>Virtually Invisible</h3>
              <p>Sleek, discreet design sits comfortably inside your ear. Most people won't even notice you're wearing them.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔋</div>
              <h3>All-Day Battery</h3>
              <p>18+ hours of battery life on a single charge. No more fumbling with tiny button batteries.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👆</div>
              <h3>One-Touch Control</h3>
              <p>Simple, intuitive controls. Adjust volume or switch modes with a single tap.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>Smart Adaptation</h3>
              <p>Automatically adjusts to your environment — whether you're in a quiet room or a bustling café.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">😊</div>
              <h3>Comfort Fit</h3>
              <p>Ergonomic design with soft silicone tips in multiple sizes for all-day wear without irritation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">Simple as 1-2-3</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Take Our Hearing Quiz</h3>
              <p>Answer a few questions about your hearing experience. Takes 3 minutes.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Get Your Recommendation</h3>
              <p>We'll match you with the right Flysound model for your needs and budget.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Try Risk-Free</h3>
              <p>Wear them everywhere. If you're not thrilled, return them for a full refund.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Real People, Real Results</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-quote">"I forgot I was wearing them. My wife had to remind me to take them out at bedtime!"</p>
              <p className="testimonial-author">Robert M., 68</p>
              <p className="testimonial-location">Denver, CO</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">"For the first time in years, I heard my granddaughter's whisper. That alone was worth every penny."</p>
              <p className="testimonial-author">Patricia L., 72</p>
              <p className="testimonial-location">Austin, TX</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">"I tried hearing aids that cost $5,000. Flysound works just as well for a fraction of the price."</p>
              <p className="testimonial-author">James K., 65</p>
              <p className="testimonial-location">Seattle, WA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title">Premium Hearing, Fair Price</h2>
          <div className="pricing-grid">
            <div className="price-card">
              <h3>Flysound Core</h3>
              <div className="price">$599<span>/pair</span></div>
              <ul className="price-features">
                <li>✓ Crystal clear sound</li>
                <li>✓ 12hr battery life</li>
                <li>✓ 3 sound modes</li>
                <li>✓ Standard fit</li>
                <li>✓ 2-year warranty</li>
              </ul>
              <a href="#cta" className="btn-secondary" style={{display: 'inline-block', marginTop: '1rem'}}>Get Started</a>
            </div>
            <div className="price-card featured">
              <h3>Flysound Pro</h3>
              <div className="price">$899<span>/pair</span></div>
              <ul className="price-features">
                <li>✓ Advanced noise cancellation</li>
                <li>✓ 18hr battery life</li>
                <li>✓ 5 sound modes</li>
                <li>✓ Bluetooth streaming</li>
                <li>✓ Custom fit</li>
                <li>✓ 2-year warranty</li>
              </ul>
              <a href="#cta" className="btn-primary" style={{display: 'inline-block', marginTop: '1rem'}}>Most Popular</a>
            </div>
            <div className="price-card">
              <h3>Flysound Elite</h3>
              <div className="price">$1,299<span>/pair</span></div>
              <ul className="price-features">
                <li>✓ Premium sound processing</li>
                <li>✓ 24hr battery life</li>
                <li>✓ 7 sound modes</li>
                <li>✓ Bluetooth + app control</li>
                <li>✓ Telehealth support</li>
                <li>✓ Premium fit case</li>
              </ul>
              <a href="#cta" className="btn-secondary" style={{display: 'inline-block', marginTop: '1rem'}}>Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="problem">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <h3>Will hearing aids work for my type of hearing loss?</h3>
              <p>Flysound hearing aids are designed for mild to moderate hearing loss, which covers 80% of cases. Take our 3-minute quiz to see if they're right for you.</p>
            </div>
            <div className="problem-card">
              <h3>How discreet are they really?</h3>
              <p>Flysound devices are smaller than a dime and come in skin-tone colors. Most users report that even close family members don't notice them.</p>
            </div>
            <div className="problem-card">
              <h3>What if they don't work for me?</h3>
              <p>We offer a 30-day, no-questions-asked return policy. If you're not completely satisfied, return them for a full refund.</p>
            </div>
            <div className="problem-card">
              <h3>Do I need a prescription?</h3>
              <p>No prescription required. Our online hearing quiz helps determine if Flysound is right for you, and our audiologists are available for telehealth consultations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="cta">
        <div className="container">
          <h2>Start Hearing What You've Been Missing</h2>
          <p>Join 50,000+ people who've rediscovered the joy of clear hearing. Try Flysound risk-free for 30 days.</p>
          <a href="#" className="btn-primary">Take the Free Hearing Quiz</a>
          <p style={{marginTop: '1rem', fontSize: '1rem', opacity: 0.8}}>Or call us: 1-800-FLY-SOUND</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Products</h4>
              <ul>
                <li><a href="#pricing">Flysound Core</a></li>
                <li><a href="#pricing">Flysound Pro</a></li>
                <li><a href="#pricing">Flysound Elite</a></li>
                <li><a href="#">Accessories</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#faq">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Warranty</a></li>
                <li><a href="#">Returns</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Accessibility</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Flysound. All rights reserved.</p>
            <p style={{marginTop: '0.5rem', fontSize: '0.8rem'}}>Flysound hearing aids are FDA-registered Class II medical devices.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}