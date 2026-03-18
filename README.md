# Assistant Skills & Automation

This repository serves as the central hub for specialized agent skills and automation workflows for my personal assistant. It is designed to extend the capabilities of Gemini CLI with domain-specific knowledge, custom infrastructure management, and optimized workflows.

## 🛠 Skills

Each skill provides specialized guidance and tools for specific tasks.

### commit (`commit`)
**Purpose:** Use this skill when the user asks to commit changes to the code or prepare a commit or sync code changes.

### container-explorer (`container-explorer`)
**Purpose:** Use this skill to explore and list tags for public repositories on the GitHub Container Registry (ghcr.io) and Docker Hub (docker.io).

### deploy-self-hosted (`self-hosted-updates`)
**Purpose:** Use this skill when the user asks to update or deploy self-hosted apps to a new version. The user self-hosts Actual Budget, Vaultwarden, Vikunja and life tracker

### todo (`todo`)
**Purpose:** Use this skill when the user wants to manage, list, or be reminded of tasks/todos, asks about their schedule (e.g., "what do I have to do tomorrow?"), or needs to create/update tasks in Vikunja.

### working-with-jj (`working-with-jj`)
**Purpose:** Expert guidance for using JJ (Jujutsu) version control system. Use when working with JJ, whatever the subject. Operations, revsets, templates, debugging change evolution, etc. Covers JJ commands, template system, evolog, operations log, and interoperability with git remotes.

---

## 🔧 Automation Hooks

### Documentation Sync
To ensure the README is always up to date with new skills, a script is provided to regenerate the skills section automatically.

**Usage:**
```bash
node .claude/scripts/sync-docs.cjs
```
