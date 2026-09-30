"use client";

import { useEffect, useState } from "react";

const SERVER_IP = "play.candlemc.net";

export default function Home() {
  const [players, setPlayers] = useState(null);
  const [online, setOnline] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Replace this endpoint with your preferred Minecraft status API.
    fetch(`https://api.mcsrvstat.us/3/${SERVER_IP}`)
      .then(r => r.json())
      .then(data => {
        setOnline(Boolean(data.online));
        setPlayers(data?.players?.online ?? 0);
      })
      .catch(() => {
        setOnline(false);
        setPlayers(0);
      });
  }, []);

  function copyIP() {
    navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main>
      <nav className="nav">
        <div className="brand"><span className="flame">◆</span> CANDLE<span>MC</span></div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#store">Store</a>
          <a href="#vote">Vote</a>
          <a href="https://discord.com" target="_blank">Discord</a>
        </div>
        <a className="navBtn" href="#play">PLAY NOW</a>
      </nav>

      <section className="hero" id="home">
        <div className="glow glow1"></div>
        <div className="glow glow2"></div>
        <div className="heroContent">
          <div className="eyebrow"><span className="dot"></span> MINECRAFT SURVIVAL SERVER</div>
          <h1>LIGHT THE<br/><strong>FIRE.</strong></h1>
          <p className="tagline">SURVIVE. FIGHT. BECOME THE BEST.</p>
          <p className="sub">Build your legacy, protect your heart and fight your way to the top.</p>
          <div className="actions">
            <button className="primary" onClick={copyIP}>{copied ? "IP COPIED!" : "PLAY CANDLEMC →"}</button>
            <a className="secondary" href="#features">EXPLORE SERVER</a>
          </div>
          <div className="serverCard" id="play">
            <div className="status"><span className={online ? "live" : "offline"}></span>{online ? "SERVER ONLINE" : "SERVER OFFLINE"}</div>
            <div className="ip" onClick={copyIP}>{SERVER_IP} <span>⧉</span></div>
            <div className="count">{players === null ? "..." : players} <small>PLAYERS ONLINE</small></div>
          </div>
        </div>
        <div className="voxelScene">
          <div className="sun"></div>
          <div className="mountain m1"></div><div className="mountain m2"></div>
          <div className="island">
            <div className="grass"></div><div className="dirt"></div><div className="stone"></div>
            <div className="tree"><i></i><b></b></div>
            <div className="candle"><span></span><em></em></div>
          </div>
        </div>
      </section>

      <section className="stats" id="features">
        <div><b>24/7</b><span>ONLINE WORLD</span></div>
        <div><b>200</b><span>PLAYER SLOTS</span></div>
        <div><b>1.21+</b><span>MINECRAFT VERSION</span></div>
        <div><b>∞</b><span>ADVENTURES</span></div>
      </section>

      <section className="section">
        <div className="sectionTitle"><span>01</span><h2>WHY <b>CANDLEMC?</b></h2></div>
        <div className="cards">
          <article><div className="icon">⚔</div><h3>INTENSE COMBAT</h3><p>Fight rival players, build your power and defend what matters.</p></article>
          <article><div className="icon">♨</div><h3>LIFETIME PROGRESS</h3><p>Create your base, collect loot and build a reputation across the server.</p></article>
          <article><div className="icon">◆</div><h3>COMMUNITY</h3><p>Join events, make allies and become part of the CandleMC community.</p></article>
        </div>
      </section>

      <section className="cta" id="store">
        <div><span>READY TO PLAY?</span><h2>YOUR STORY<br/>STARTS <b>NOW.</b></h2></div>
        <a className="primary" href="#play">JOIN CANDLEMC →</a>
      </section>

      <footer>
        <div className="brand"><span className="flame">◆</span> CANDLE<span>MC</span></div>
        <p>© 2026 CandleMC. Not affiliated with Mojang Studios.</p>
      </footer>
    </main>
  );
}