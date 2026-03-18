const fs = require('fs');
const path = require('path');

const SKILLS_DIR = path.join(__dirname, '../skills');
const README_PATH = path.join(__dirname, '../../README.md');

function extractMetadata(skillMdContent) {
  const match = skillMdContent.match(/---\n([\s\S]*?)\n---/);
  if (!match) return null;
  
  const metadata = {};
  match[1].split('\n').forEach(line => {
    const [key, ...value] = line.split(':');
    if (key && value) {
      metadata[key.trim()] = value.join(':').trim();
    }
  });
  return metadata;
}

function generateSkillsSection() {
  const skills = fs.readdirSync(SKILLS_DIR).filter(f => fs.statSync(path.join(SKILLS_DIR, f)).isDirectory());
  
  let section = '## 🛠 Skills\n\nEach skill provides specialized guidance and tools for specific tasks.\n\n';
  
  skills.sort().forEach(skill => {
    const skillPath = path.join(SKILLS_DIR, skill, 'SKILL.md');
    if (fs.existsSync(skillPath)) {
      const content = fs.readFileSync(skillPath, 'utf8');
      const metadata = extractMetadata(content);
      if (metadata) {
        section += `### ${metadata.name || skill} (\`${skill}\`)\n`;
        section += `**Purpose:** ${metadata.description}\n\n`;
      }
    }
  });
  
  return section;
}

if (!fs.existsSync(README_PATH)) {
  console.error('❌ README.md not found at ' + README_PATH);
  process.exit(1);
}

const readmeContent = fs.readFileSync(README_PATH, 'utf8');
const skillsSection = generateSkillsSection();

const newContent = readmeContent.replace(
  /## 🛠 Skills[\s\S]*?---\n/m,
  `${skillsSection}---\n`
);

if (newContent !== readmeContent) {
  fs.writeFileSync(README_PATH, newContent);
  console.log('✅ README.md skills section updated!');
} else {
  // Silent success for hook compatibility
  console.log('ℹ️ No changes detected in skills, README.md remains unchanged.');
}
