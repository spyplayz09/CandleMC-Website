"use client";

import { useEffect, useState } from "react";

const SERVER_IP = "play.candlemc.lol";
const DISCORD_URL = "https://discord.gg/uTzr3qMyMV";
const STORE_URL = "#store";
const VOTE_URL = "#vote";

export default function Home() {
  const [players, setPlayers] = useState(0);
  const [online, setOnline] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch(`https://api.mcsrvstat.us/3/${SERVER_IP}`)
      .then((r) => r.json())
      .then((data) => {
        setOnline(Boolean(data.online));
        setPlayers(data?.players?.online ?? 0);
      })
      .catch(() => {
        setOnline(false);
        setPlayers(0);
      });
  }, []);

  const copyIP = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <main>
      <div className="topline" />
      <nav className="nav">
        <a className="logo" href="#home">
          <span className="logoMark">C</span>
          <span>CANDLE<span className="accent">MC</span></span>
        </a>
        <div className="navLinks">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#store">Store</a>
          <a href="#vote">Vote</a>
          <a href={DISCORD_URL} target="_blank" rel="noreferrer">Discord</a>
        </div>
        <button className="joinSmall" onClick={copyIP}>PLAY NOW</button>
      </nav>

      <section className="hero" id="home">
        <div className="heroBackdrop">
          <div className="moon" />
          <div className="cloud c1" />
          <div className="cloud c2" />
          <div className="mountain far" />
          <div className="mountain near" />
          <div className="forest">
            <i /><i /><i /><i /><i /><i /><i />
          </div>
          <div className="ground" />
        </div>

        <div className="heroInner">
          <div className="pill"><span className={online ? "pulse" : "pulse off"} /> {online ? "SERVER ONLINE" : "SERVER OFFLINE"} · {players} PLAYERS</div>
          <h1>YOUR NEXT<br /><span>ADVENTURE</span><br />STARTS HERE.</h1>
          <p className="heroText">
            Welcome to CandleMC — a competitive Minecraft SMP built for players
            who want survival, progression, PvP and a community that keeps the world alive.
          </p>

          <div className="heroButtons">
            <button className="primary" onClick={copyIP}>{copied ? "IP COPIED!" : "PLAY CANDLEMC"}</button>
            <a className="ghost" href={DISCORD_URL} target="_blank" rel="noreferrer">JOIN DISCORD</a>
          </div>

          <button className="ipBox" onClick={copyIP}>
            <span className="ipLabel">SERVER IP</span>
            <strong>{SERVER_IP}</strong>
            <span className="copy">COPY</span>
          </button>
        </div>

        <div className="scroll">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="quickStats">
        <div><strong>{players}</strong><span>PLAYERS ONLINE</span></div>
        <div><strong>24/7</strong><span>SERVER UPTIME</span></div>
        <div><strong>1.21+</strong><span>SUPPORTED VERSION</span></div>
        <div><strong>200</strong><span>PLAYER SLOTS</span></div>
      </section>

      <section className="content" id="features">
        <div className="sectionHead">
          <span>01 / THE SERVER</span>
          <h2>BUILT FOR<br /><em>REAL ADVENTURES.</em></h2>
          <p>Not another empty survival world. CandleMC is designed around progression, competition and moments worth remembering.</p>
        </div>

        <div className="featureGrid">
          <article className="feature large">
            <span className="number">01</span>
            <div className="featureIcon">⚔</div>
            <h3>COMPETITIVE SURVIVAL</h3>
            <p>Build your base, gather resources, form alliances and fight when the moment comes.</p>
          </article>
          <article className="feature">
            <span className="number">02</span>
            <div className="featureIcon">◆</div>
            <h3>PROGRESSION</h3>
            <p>Every hour you play moves your story forward.</p>
          </article>
          <article className="feature">
            <span className="number">03</span>
            <div className="featureIcon">♜</div>
            <h3>COMMUNITY</h3>
            <p>Meet teammates, rivals and friends through events and an active Discord.</p>
          </article>
        </div>
      </section>

      <section className="joinSection">
        <div className="joinCard">
          <div>
            <span className="eyebrow">READY WHEN YOU ARE</span>
            <h2>ENTER THE<br /><em>CANDLEMC WORLD.</em></h2>
            <p>Java and Bedrock players are welcome. Copy the IP and jump in.</p>
          </div>
          <button className="primary" onClick={copyIP}>{copied ? "COPIED!" : "COPY SERVER IP"}</button>
        </div>
      </section>

      <section className="content split" id="store">
        <div>
          <span className="eyebrow">02 / STORE</span>
          <h2>SUPPORT THE<br /><em>SERVER.</em></h2>
          <p>Support CandleMC development and unlock cosmetics, ranks and other server perks.</p>
          <a className="primary inline" href={STORE_URL}>OPEN STORE →</a>
        </div>
        <div className="miniPanel">
          <span>STORE</span>
          <strong>COMING SOON</strong>
          <p>Connect your Tebex store link in <code>app/page.js</code>.</p>
        </div>
      </section>

      <section className="voteSection" id="vote">
        <div className="voteInner">
          <span className="eyebrow">03 / VOTE</span>
          <h2>HELP US<br /><em>GROW.</em></h2>
          <p>Vote for CandleMC on Minecraft server lists and help new players discover the community.</p>
          <a className="ghost light" href="#vote">VOTE FOR CANDLEMC →</a>
        </div>
      </section>

      <footer>
        <div className="footerLogo"><span className="logoMark">C</span> CANDLE<span>MC</span></div>
        <div className="footerLinks">
          <a href="#home">Home</a><a href="#features">Features</a><a href="#store">Store</a><a href="#vote">Vote</a>
        </div>
        <p>© 2026 CandleMC · Not affiliated with Mojang Studios.</p>
      </footer>
    </main>
  );
}
