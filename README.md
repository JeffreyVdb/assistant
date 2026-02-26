# Assistant Skills & Automation

This repository serves as the central hub for specialized agent skills and automation workflows for my personal assistant. It is designed to extend the capabilities of Gemini CLI with domain-specific knowledge, custom infrastructure management, and optimized workflows.

## 🛠 Skills

Each skill provides specialized guidance and tools for specific tasks.

### commit (`commit`)
**Purpose:** Use this skill when the user asks to commit changes to the code or prepare a commit or sync code changes.

### container-explorer (`container-explorer`)
**Purpose:** Use this skill to explore and list tags for public repositories on the GitHub Container Registry (ghcr.io) and Docker Hub (docker.io).

### deploy-self-hosted (`self-hosted-updates`)
**Purpose:** Use this skill when the user asks to update or deploy self-hosted apps to a new version. The user self-hosts Actual Budget, Vaultwarden, and Vikunja.

### todo (`todo`)
**Purpose:** Use this skill when the user wants to be reminded of something, asks to create or schedule a task, or asks about tasks in general.

---

## 🔧 Automation Hooks

### Documentation Sync
To ensure the README is always up to date with new skills, a script is provided to regenerate the skills section automatically.

**Usage:**
```bash
node .agents/scripts/sync-docs.cjs
```
