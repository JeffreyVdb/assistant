# Assistant Skills & Automation

This repository serves as the central hub for specialized agent skills and automation workflows for my personal assistant. It is designed to extend the capabilities of Gemini CLI with domain-specific knowledge, custom infrastructure management, and optimized workflows.

## 🛠 Skills

Each skill provides specialized guidance and tools for specific tasks.

### 📝 Commit (`commit`)
**Purpose:** Handles code commits using [Jujutsu (jj)](https://martinvonz.github.io/jj/) and [Conventional Commits](https://www.conventionalcommits.org/).
- **Workflow:** Automated `jj commit -m`, bookmark management (`main`), and remote pushing.
- **Standards:** Enforces line length limits (100 chars) and standardized commit types.

### 📦 Container Explorer (`container-explorer`)
**Purpose:** Queries public container registries (Docker Hub and GHCR) for available image tags.
- **Capability:** Handles anonymous authentication for GHCR and provides simple listing for Docker Hub.

### 🚀 Self-Hosted Updates (`deploy-self-hosted`)
**Purpose:** Manages updates and deployments for self-hosted applications.
- **Applications:** Actual Budget, Vaultwarden, and Vikunja.
- **Workflow:** Updates Ansible configuration (`ansible-home`) and executes playbooks ONLY when version updates are detected.

### ✅ Todo Manager (`todo`)
**Purpose:** Comprehensive task management via the [Vikunja](https://vikunja.io/) API.
- **Features:** Brussels timezone support, ADHD-friendly task breakdown (subtasks), and HTML description support.
- **Context:** Defaults to open tasks and respects specific project IDs for Work, Household, and Inbox.

---

## 🔧 Automation Hooks

### Documentation Sync
To ensure the README is always up to date with new skills, a script is provided to regenerate the skills section automatically.

**Usage:**
```bash
node .agents/scripts/sync-docs.cjs
```
