const fs = require('fs');
const path = require('path');

const SKILLS_DIR = path.join(__dirname, '../skills');
const README_PATH = path.join(__dirname, '../../README.md');

function extractMetadata(skillMdContent) {
  const match = skillMdContent.match(/---
([\s\S]*?)
---/);
  if (!match) return null;
  
  const metadata = {};
  match[1].split('
').forEach(line => {
    const [key, ...value] = line.split(':');
    if (key && value) {
      metadata[key.trim()] = value.join(':').trim();
    }
  });
  return metadata;
}

function generateSkillsSection() {
  const skills = fs.readdirSync(SKILLS_DIR).filter(f => fs.statSync(path.join(SKILLS_DIR, f)).isDirectory());
  
  let section = '## 🛠 Skills

Each skill provides specialized guidance and tools for specific tasks.

';
  
  skills.sort().forEach(skill => {
    const skillPath = path.join(SKILLS_DIR, skill, 'SKILL.md');
    if (fs.existsSync(skillPath)) {
      const content = fs.readFileSync(skillPath, 'utf8');
      const metadata = extractMetadata(content);
      if (metadata) {
        section += `### ${metadata.name || skill} (`${skill}`)
`;
        section += `**Purpose:** ${metadata.description}

`;
      }
    }
  });
  
  return section;
}

const readmeContent = fs.readFileSync(README_PATH, 'utf8');
const skillsSection = generateSkillsSection();

const updatedReadme = readmeContent.replace(
  /## 🛠 Skills[\s\S]*?---
/m,
  `${skillsSection}---
`
);

fs.writeFileSync(README_PATH, updatedReadme);
console.log('✅ README.md skills section updated!');
