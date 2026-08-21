import { useMemo, useState } from "react";
import "./App.css";

const tools = [
  {
    id: 1,
    name: "CodePilot AI",
    category: "Coding",
    description: "AI coding assistant for developers, debugging and code generation.",
    price: "Free",
    rating: 4.9,
    trust: 96,
    users: "2.4M",
    icon: "⌘",
  },
  {
    id: 2,
    name: "VisionForge",
    category: "Image",
    description: "Create high-quality images and creative visuals with AI.",
    price: "Freemium",
    rating: 4.8,
    trust: 94,
    users: "1.8M",
    icon: "✦",
  },
  {
    id: 3,
    name: "WriteWise",
    category: "Writing",
    description: "AI writing assistant for content, emails and professional documents.",
    price: "Free",
    rating: 4.7,
    trust: 92,
    users: "980K",
    icon: "W",
  },
  {
    id: 4,
    name: "DataMind",
    category: "Analytics",
    description: "Turn complex datasets into understandable AI-powered insights.",
    price: "Paid",
    rating: 4.8,
    trust: 95,
    users: "620K",
    icon: "◈",
  },
  {
    id: 5,
    name: "StudyGenie",
    category: "Education",
    description: "Personalized AI tutor for learning, revision and exam preparation.",
    price: "Freemium",
    rating: 4.9,
    trust: 97,
    users: "1.2M",
    icon: "✎",
  },
  {
    id: 6,
    name: "ChatFlow",
    category: "Business",
    description: "Build intelligent AI customer support experiences.",
    price: "Paid",
    rating: 4.6,
    trust: 91,
    users: "450K",
    icon: "◉",
  },
];

const categories = [
  "All",
  "Coding",
  "Image",
  "Writing",
  "Analytics",
  "Education",
  "Business",
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [compare, setCompare] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [playgroundPrompt, setPlaygroundPrompt] = useState("");
  const [playgroundAnswer, setPlaygroundAnswer] = useState("");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory =
        category === "All" || tool.category === category;

      const matchesSearch =
        tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.description.toLowerCase().includes(search.toLowerCase()) ||
        tool.category.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const toggleCompare = (tool) => {
    setCompare((current) => {
      const exists = current.some((item) => item.id === tool.id);

      if (exists) {
        return current.filter((item) => item.id !== tool.id);
      }

      if (current.length >= 2) {
        return current;
      }

      return [...current, tool];
    });
  };

const getRecommendation = () => {
  if (!prompt.trim()) {
    setRecommendation("Tell us what you want to use AI for.");
    return;
  }

  const text = prompt.toLowerCase();

  if (
    text.includes("code") ||
    text.includes("coding") ||
    text.includes("program")
  ) {
    setRecommendation(
      "CodePilot AI — Best match for coding, debugging and development."
    );
  } else if (
    text.includes("image") ||
    text.includes("design") ||
    text.includes("photo")
  ) {
    setRecommendation(
      "VisionForge — Great choice for AI image generation and creative work."
    );
  } else if (
    text.includes("study") ||
    text.includes("learn") ||
    text.includes("exam")
  ) {
    setRecommendation(
      "StudyGenie — Recommended for personalized learning and exam preparation."
    );
  } else if (
    text.includes("write") ||
    text.includes("content") ||
    text.includes("email")
  ) {
    setRecommendation(
      "WriteWise — A strong choice for writing and professional content."
    );
  } else {
    setRecommendation(
      "We recommend starting with CodePilot AI or StudyGenie based on your general use case."
    );
  }
};


// PLAYGROUND AI
const runPlayground = () => {
  if (!playgroundPrompt.trim()) {
    setPlaygroundAnswer("Please enter a prompt first.");
    return;
  }

  const text = playgroundPrompt.toLowerCase();

  if (
    text.includes("code") ||
    text.includes("coding") ||
    text.includes("react") ||
    text.includes("javascript")
  ) {
    setPlaygroundAnswer(
      "AI suggestion: Use CodePilot AI for coding, debugging, React and JavaScript development."
    );
  } else if (
    text.includes("image") ||
    text.includes("design") ||
    text.includes("photo")
  ) {
    setPlaygroundAnswer(
      "AI suggestion: Use VisionForge for image generation, creative design and visual content."
    );
  } else if (
    text.includes("study") ||
    text.includes("learn") ||
    text.includes("exam")
  ) {
    setPlaygroundAnswer(
      "AI suggestion: Use StudyGenie for personalized learning, revision and exam preparation."
    );
  } else if (
    text.includes("write") ||
    text.includes("email") ||
    text.includes("content")
  ) {
    setPlaygroundAnswer(
      "AI suggestion: Use WriteWise for content writing, emails and professional documents."
    );
  } else {
    setPlaygroundAnswer(
      "AIHub analyzed your request. Try asking about coding, images, writing, analytics or education."
    );
  }
};


  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo-wrap">
          <div className="logo-mark">AI</div>
          <div>
            <div className="logo-text">AIHub</div>
            <div className="logo-subtitle">AI Marketplace</div>
          </div>
        </div>

        <div className="nav-links">
          <a href="#explore">Explore</a>
          <a href="#compare">Compare</a>
          <a href="#recommend">AI Match</a>
          <a href="#playground">Playground</a>
        </div>

        <button className="login-btn">Sign In</button>
      </nav>

      {/* HERO */}
      <main>
        <section className="hero">
          <div className="hero-glow glow-one"></div>
          <div className="hero-glow glow-two"></div>

          <div className="hero-content">
            <div className="eyebrow">
              <span className="pulse"></span>
              THE TRUSTED AI MARKETPLACE
            </div>

            <h1>
              Discover the right AI.
              <br />
              <span>Build what's next.</span>
            </h1>

            <p>
              Explore, evaluate and compare AI tools and models in one
              transparent marketplace. Find the right AI with confidence.
            </p>

            <div className="hero-search">
              <span>⌕</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search AI tools, models, use cases..."
              />
              <button onClick={() => document.getElementById("explore")?.scrollIntoView()}>
                Search
              </button>
            </div>

            <div className="hero-tags">
              <span>✦ Verified tools</span>
              <span>◈ Trust scores</span>
              <span>⚡ Smart recommendations</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="floating-card card-top">
              <span className="mini-icon">✓</span>
              <div>
                <strong>Verified AI</strong>
                <small>Trust score 96%</small>
              </div>
            </div>

            <div className="ai-orbit">
              <div className="orbit orbit-one"></div>
              <div className="orbit orbit-two"></div>
              <div className="core">AI</div>
              <span className="orbit-icon icon-one">⌘</span>
              <span className="orbit-icon icon-two">✦</span>
              <span className="orbit-icon icon-three">W</span>
            </div>

            <div className="floating-card card-bottom">
              <span className="mini-icon">★</span>
              <div>
                <strong>4.9 / 5</strong>
                <small>From 12K+ reviews</small>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats">
          <div>
            <strong>500+</strong>
            <span>AI Tools</span>
          </div>
          <div>
            <strong>50K+</strong>
            <span>Users</span>
          </div>
          <div>
            <strong>98%</strong>
            <span>Verified</span>
          </div>
          <div>
            <strong>4.8★</strong>
            <span>Average Rating</span>
          </div>
        </section>

        {/* EXPLORE */}
        <section className="section" id="explore">
          <div className="section-heading">
            <div>
              <span className="section-label">EXPLORE</span>
              <h2>Find your perfect AI tool</h2>
              <p>
                Discover trusted AI tools across popular categories.
              </p>
            </div>
          </div>

          <div className="categories">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="tool-grid">
            {filteredTools.map((tool) => (
              <article className="tool-card" key={tool.id}>
                <div className="tool-top">
                  <div className="tool-icon">{tool.icon}</div>
                  <span className="verified">✓ Verified</span>
                </div>

                <div className="tool-info">
                  <span className="tool-category">{tool.category}</span>
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                </div>

                <div className="tool-rating">
                  <span>★ {tool.rating}</span>
                  <span>{tool.users} users</span>
                </div>

                <div className="trust-row">
                  <div>
                    <small>Trust Score</small>
                    <div className="trust-bar">
                      <span style={{ width: `${tool.trust}%` }}></span>
                    </div>
                  </div>
                  <strong>{tool.trust}%</strong>
                </div>

                <div className="tool-footer">
                  <span className="price">{tool.price}</span>
                  <button
                    className={
                      compare.some((item) => item.id === tool.id)
                        ? "compare selected"
                        : "compare"
                    }
                    onClick={() => toggleCompare(tool)}
                  >
                    {compare.some((item) => item.id === tool.id)
                      ? "✓ Added"
                      : "+ Compare"}
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="empty">
              No AI tools found. Try another search or category.
            </div>
          )}
        </section>

        {/* AI MATCH */}
        <section className="match-section" id="recommend">
          <div className="match-content">
            <span className="section-label">AI MATCH</span>
            <h2>Not sure which AI to choose?</h2>
            <p>
              Tell AI what you need and we'll recommend the most suitable
              tool for your use case.
            </p>

            <div className="match-input">
              <input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. I need an AI for coding..."
              />
              <button onClick={getRecommendation}>Find my AI →</button>
            </div>

            {recommendation && (
              <div className="recommendation">
                <span>✦</span>
                <div>
                  <small>AI RECOMMENDATION</small>
                  <strong>{recommendation}</strong>
                </div>
              </div>
            )}
          </div>

          <div className="match-visual">
            <div className="match-circle">
              <div className="match-inner">AI</div>
            </div>
            <div className="match-pill pill-one">Coding</div>
            <div className="match-pill pill-two">Image</div>
            <div className="match-pill pill-three">Education</div>
          </div>
        </section>

        {/* COMPARE */}
        <section className="section compare-section" id="compare">
          <div className="section-heading">
            <div>
              <span className="section-label">COMPARE</span>
              <h2>Make better AI decisions</h2>
              <p>
                Compare tools side-by-side before choosing the right one.
              </p>
            </div>
          </div>

          <div className="compare-box">
            {compare.length === 0 ? (
              <div className="compare-empty">
                <div className="compare-symbol">⚖</div>
                <h3>Add tools to compare</h3>
                <p>
                  Choose up to two AI tools from the marketplace above.
                </p>
                <button
                  onClick={() =>
                    document.getElementById("explore")?.scrollIntoView()
                  }
                >
                  Explore Tools
                </button>
              </div>
            ) : (
              <div className="compare-preview">
                {compare.map((tool) => (
                  <div className="compare-item" key={tool.id}>
                    <div className="tool-icon">{tool.icon}</div>
                    <h3>{tool.name}</h3>
                    <span>{tool.category}</span>
                    <strong>Trust {tool.trust}%</strong>
                    <button onClick={() => toggleCompare(tool)}>Remove</button>
                  </div>
                ))}

                {compare.length === 1 && (
                  <div className="compare-placeholder">
                    + Add one more tool
                  </div>
                )}

                {compare.length === 2 && (
                  <button
                    className="compare-now"
                    onClick={() => setShowCompare(true)}
                  >
                    Compare Now →
                  </button>
                )}
              </div>
            )}
          </div>
        </section>

        {/* PLAYGROUND */}
<section className="playground" id="playground">
  <div>
    <span className="section-label">AI PLAYGROUND</span>

    <h2>Experience AI before you choose.</h2>

    <p>
      Test an AI use case and discover which tool fits your workflow best.
      No guesswork. Just describe what you need.
    </p>

    <div className="playground-input">
      <input
        value={playgroundPrompt}
        onChange={(e) => setPlaygroundPrompt(e.target.value)}
        placeholder="Ask something like: Help me build a React app..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            runPlayground();
          }
        }}
      />

      <button onClick={runPlayground}>
        Run AI →
      </button>
    </div>

    {playgroundAnswer && (
      <div className="playground-answer">
        <span>✦</span>
        <div>
          <small>AIHUB RESPONSE</small>
          <strong>{playgroundAnswer}</strong>
        </div>
      </div>
    )}
  </div>

  <div className="terminal-card">
    <div className="terminal-header">
      <span></span>
      <span></span>
      <span></span>
      <small>AIHub Playground</small>
    </div>

    <div className="terminal-body">
      <p>
        <span className="green">&gt;</span>{" "}
        {playgroundPrompt || "Waiting for your prompt..."}
      </p>

      <p className="faded">
        AI tools connected and ready to test.
      </p>

      {playgroundAnswer && (
        <p className="terminal-result">
          <span className="green">&gt;</span> Response generated ✓
        </p>
      )}

      <div className="terminal-line">
        <span>&gt;</span>
        <i></i>
      </div>
    </div>
  </div>
</section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="logo-wrap">
          <div className="logo-mark">AI</div>
          <div>
            <div className="logo-text">AIHub</div>
            <div className="logo-subtitle">AI Marketplace</div>
          </div>
        </div>

        <p>
          Discover smarter. Compare confidently. Build the future with AI.
        </p>

        <span>© 2026 AIHub. Built for CodeFury 9.0.</span>
      </footer>

      {/* COMPARE MODAL */}
      {showCompare && compare.length === 2 && (
        <div className="modal-overlay" onClick={() => setShowCompare(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal"
              onClick={() => setShowCompare(false)}
            >
              ×
            </button>

            <span className="section-label">AI COMPARISON</span>
            <h2>{compare[0].name} vs {compare[1].name}</h2>

            <div className="comparison-table">
              <div>Category</div>
              <strong>{compare[0].category}</strong>
              <strong>{compare[1].category}</strong>

              <div>Rating</div>
              <span>★ {compare[0].rating}</span>
              <span>★ {compare[1].rating}</span>

              <div>Trust Score</div>
              <span>{compare[0].trust}%</span>
              <span>{compare[1].trust}%</span>

              <div>Users</div>
              <span>{compare[0].users}</span>
              <span>{compare[1].users}</span>

              <div>Pricing</div>
              <span>{compare[0].price}</span>
              <span>{compare[1].price}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;