import React from 'react';
import './App.css';

const bosses = [
  {
    name: 'Andariel',
    title: 'Maiden of Anguish',
    act: 'Act I',
    characteristics: 'Andariel is the final boss of Act I. She is known for her powerful poison attacks and is a large, demonic creature. She uses poison-based attacks that can deal significant damage over time.',
    location: 'Catacombs Level 4, Act I',
    health: {
      normal: 1024,
      nightmare: 36000,
      hell: 60000
    },
    resistances: {
      physical: { normal: 0, nightmare: 0, hell: 0 },
      fire: { normal: 0, nightmare: 0, hell: 50 },
      cold: { normal: 50, nightmare: 50, hell: 50 },
      lightning: { normal: 0, nightmare: 0, hell: 50 },
      poison: { normal: 75, nightmare: 75, hell: 75 },
      magic: { normal: 0, nightmare: 0, hell: 0 }
    },
    drainEffectiveness: {
      normal: 100,
      nightmare: 50,
      hell: 0
    },
    monsterLevel: {
      normal: 12,
      nightmare: 49,
      hell: 75
    },
    highestRuneDrop: {
      normal: 'Ral',
      nightmare: 'Ko',
      hell: 'Lo'
    },
    weaknesses: 'Andariel is highly susceptible to fire and lightning attacks, especially in Normal and Nightmare difficulties where she has 0% resistance to both. Physical and magic damage are also effective.',
    gifUrl: process.env.PUBLIC_URL + '/boss-gifs/andariel.gif'
  },
  {
    name: 'Duriel',
    title: 'Lord of Pain',
    act: 'Act II',
    characteristics: 'Duriel is the final boss of Act II. He is notorious for his powerful melee attacks and Holy Freeze aura, which significantly slows players. He is a large, insect-like demon with powerful physical attacks.',
    location: 'Tal Rasha\'s Tomb, Act II (accessed through Canyon of the Magi)',
    health: {
      normal: 2484,
      nightmare: 9907,
      hell: 39148
    },
    resistances: {
      physical: { normal: 0, nightmare: 0, hell: 50 },
      fire: { normal: 20, nightmare: 50, hell: 75 },
      cold: { normal: 50, nightmare: 75, hell: 95 },
      lightning: { normal: 20, nightmare: 50, hell: 75 },
      poison: { normal: 20, nightmare: 50, hell: 75 },
      magic: { normal: 0, nightmare: 0, hell: 33 }
    },
    drainEffectiveness: {
      normal: 100,
      nightmare: 100,
      hell: 100
    },
    monsterLevel: {
      normal: 22,
      nightmare: 55,
      hell: 88
    },
    highestRuneDrop: {
      normal: 'Ral',
      nightmare: 'Ko',
      hell: 'Lo'
    },
    weaknesses: 'Duriel has no specific elemental weaknesses, but physical and magic damage are most effective, especially in Normal and Nightmare. His extremely high cold resistance (95% in Hell) makes cold attacks nearly useless. Fire and lightning are moderately effective in lower difficulties.',
    gifUrl: process.env.PUBLIC_URL + '/boss-gifs/duriel.gif'
  },
  {
    name: 'Mephisto',
    title: 'Lord of Hatred',
    act: 'Act III',
    characteristics: 'Mephisto is the final boss of Act III. He specializes in powerful lightning and cold attacks. He is known for his high movement speed and ability to teleport, making him a challenging opponent.',
    location: 'Durance of Hate Level 3, Act III',
    health: {
      normal: 6631,
      nightmare: 24000,
      hell: 96000
    },
    resistances: {
      physical: { normal: 0, nightmare: 0, hell: 25 },
      fire: { normal: 33, nightmare: 50, hell: 75 },
      cold: { normal: 50, nightmare: 75, hell: 75 },
      lightning: { normal: 33, nightmare: 50, hell: 75 },
      poison: { normal: 50, nightmare: 50, hell: 75 },
      magic: { normal: 0, nightmare: 0, hell: 0 }
    },
    drainEffectiveness: {
      normal: 100,
      nightmare: 0,
      hell: 0
    },
    monsterLevel: {
      normal: 26,
      nightmare: 59,
      hell: 87
    },
    highestRuneDrop: {
      normal: 'Tal',
      nightmare: 'Ko',
      hell: 'Gul'
    },
    weaknesses: 'Mephisto has lower resistance to physical and magic damage, especially in Normal and Nightmare. Fire and lightning attacks are moderately effective in lower difficulties, but become less effective in Hell. Poison resistance is lower in Normal and Nightmare.',
    gifUrl: process.env.PUBLIC_URL + '/boss-gifs/mephisto.gif'
  },
  {
    name: 'Diablo',
    title: 'Lord of Terror',
    act: 'Act IV',
    characteristics: 'Diablo is the titular character and final boss of Act IV. He employs devastating fire and lightning attacks, including his infamous Lightning Inferno attack that can deal massive damage. He is one of the most challenging bosses in the game.',
    location: 'The Chaos Sanctuary, Act IV (appears after opening all five seals)',
    health: {
      normal: 13820,
      nightmare: 33000,
      hell: 113812
    },
    resistances: {
      physical: { normal: 0, nightmare: 0, hell: 45 },
      fire: { normal: 33, nightmare: 50, hell: 50 },
      cold: { normal: 33, nightmare: 50, hell: 50 },
      lightning: { normal: 33, nightmare: 50, hell: 50 },
      poison: { normal: 50, nightmare: 50, hell: 50 },
      magic: { normal: 0, nightmare: 0, hell: 0 }
    },
    drainEffectiveness: {
      normal: 100,
      nightmare: 50,
      hell: 0
    },
    monsterLevel: {
      normal: 40,
      nightmare: 62,
      hell: 94
    },
    highestRuneDrop: {
      normal: 'Sol',
      nightmare: 'Um',
      hell: 'Zod'
    },
    weaknesses: 'Diablo has balanced resistances, but physical and magic damage are most effective, especially in Normal and Nightmare. All elemental resistances are moderate, making him vulnerable to any damage type with proper resistance reduction.',
    gifUrl: process.env.PUBLIC_URL + '/boss-gifs/diablo.gif'
  },
  {
    name: 'Baal',
    title: 'Lord of Destruction',
    act: 'Act V',
    characteristics: 'Baal is the final boss of Act V and the entire game. He uses a variety of powerful elemental attacks and can summon minions to aid him. He is known for his cloning ability and is the most challenging boss encounter in Diablo II.',
    location: 'The Worldstone Chamber, Act V',
    health: {
      normal: 26484,
      nightmare: 117596,
      hell: 493701
    },
    resistances: {
      physical: { normal: 0, nightmare: 0, hell: 50 },
      fire: { normal: 33, nightmare: 50, hell: 50 },
      cold: { normal: 33, nightmare: 50, hell: 50 },
      lightning: { normal: 33, nightmare: 50, hell: 50 },
      poison: { normal: 50, nightmare: 50, hell: 50 },
      magic: { normal: 0, nightmare: 0, hell: 0 }
    },
    drainEffectiveness: {
      normal: 100,
      nightmare: 50,
      hell: 20
    },
    monsterLevel: {
      normal: 60,
      nightmare: 75,
      hell: 99
    },
    highestRuneDrop: {
      normal: 'Sol',
      nightmare: 'Um',
      hell: 'Zod'
    },
    weaknesses: 'Baal has balanced resistances similar to Diablo. Physical and magic damage are most effective, especially in Normal and Nightmare. All elemental resistances are moderate, making him vulnerable to any damage type with proper resistance reduction.',
    gifUrl: process.env.PUBLIC_URL + '/boss-gifs/baal.gif'
  }
];

function BossCard({ boss }) {
  return (
    <section className="boss-card">
      <div className="boss-header">
        <h2>{boss.name}</h2>
        <h3 className="boss-title">{boss.title} - {boss.act}</h3>
      </div>
      
      <div className="boss-content">
        <div className="boss-image-container">
          <img 
            src={boss.gifUrl} 
            alt={`${boss.name} animated`}
            className="boss-gif"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              const placeholder = e.target.nextElementSibling;
              if (placeholder) {
                placeholder.style.display = 'block';
              }
            }}
          />
          <div className="boss-image-placeholder" style={{ display: 'none' }}>
            <div className="placeholder-content">
              <p className="placeholder-title">{boss.name}</p>
              <p className="placeholder-text">Animated GIF</p>
              <p className="image-note">To display the GIF:</p>
              <p className="image-note">1. Create a folder: public/boss-gifs/</p>
              <p className="image-note">2. Add {boss.name.toLowerCase()}.gif to that folder</p>
              <p className="image-note">3. The image will load automatically</p>
            </div>
          </div>
        </div>

        <div className="boss-info">
          <div className="info-section">
            <h4>Characteristics</h4>
            <p>{boss.characteristics}</p>
          </div>

          <div className="info-section">
            <h4>Location</h4>
            <p>{boss.location}</p>
          </div>

          <div className="info-section">
            <h4>Health Points</h4>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">Normal:</span>
                <span className="stat-value">{boss.health.normal.toLocaleString()}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Nightmare:</span>
                <span className="stat-value">{boss.health.nightmare.toLocaleString()}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Hell:</span>
                <span className="stat-value">{boss.health.hell.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h4>Monster Level</h4>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">Normal:</span>
                <span className="stat-value">{boss.monsterLevel.normal}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Nightmare:</span>
                <span className="stat-value">{boss.monsterLevel.nightmare}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Hell:</span>
                <span className="stat-value">{boss.monsterLevel.hell}</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h4>Resistances</h4>
            <div className="resistances-table">
              <div className="resistance-header">
                <span>Type</span>
                <span>Normal</span>
                <span>Nightmare</span>
                <span>Hell</span>
              </div>
              {Object.entries(boss.resistances).map(([type, values]) => (
                <div key={type} className="resistance-row">
                  <span className="resistance-type">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                  <span className="resistance-value">{values.normal}%</span>
                  <span className="resistance-value">{values.nightmare}%</span>
                  <span className="resistance-value">{values.hell}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="info-section">
            <h4>Drain Effectiveness</h4>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">Normal:</span>
                <span className="stat-value">{boss.drainEffectiveness.normal}%</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Nightmare:</span>
                <span className="stat-value">{boss.drainEffectiveness.nightmare}%</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Hell:</span>
                <span className="stat-value">{boss.drainEffectiveness.hell}%</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h4>Highest Rune Drop</h4>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">Normal:</span>
                <span className="stat-value rune">{boss.highestRuneDrop.normal}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Nightmare:</span>
                <span className="stat-value rune">{boss.highestRuneDrop.nightmare}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Hell:</span>
                <span className="stat-value rune">{boss.highestRuneDrop.hell}</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h4>Weaknesses</h4>
            <p className="weaknesses">{boss.weaknesses}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Diablo II Resurrected Boss Guide</h1>
        <p>Welcome to the ultimate guide for Diablo II Resurrected bosses. Here you'll find comprehensive strategies, detailed stats, and everything you need to know about each boss.</p>
      </header>
      <main>
        {bosses.map((boss, index) => (
          <BossCard key={index} boss={boss} />
        ))}
      </main>
      <footer>
        <p>© João and Kiki Company - 2025.</p>
      </footer>
    </div>
  );
}

export default App;
