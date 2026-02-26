---
name: deploy-self-hosted
description: Use this skill when the user asks to update or deploy self-hosted apps to a new version. The user self-hosts Actual Budget, Vaultwarden, and Vikunja.
---

## Deployment Repository

The deployment repository is located at: `$HOME/devel/ansible-home`

### Environment Activation
The project uses a Python virtual environment. To activate it for tool execution:

```bash
cd $HOME/devel/ansible-home && source .venv/bin/activate
```

## Software Configuration

Versions and image definitions are stored in each role's defaults file:
`$HOME/devel/ansible-home/roles/<software>/defaults/main.yaml`

### Deployment Workflow
1.  **Check Version:** Identify the latest version of the container image (e.g., via Docker Hub or GHCR).
2.  **Update Config:** Update the `<software>__version` variable in the corresponding `defaults/main.yaml` file.
3.  **Run Playbook:** Execute the playbook from the `$HOME/devel/ansible-home` directory with the `--diff` flag.

## Software Details

### Actual Budget
- **Container Image:** `docker.io/actualbudget/actual-server`
- **Playbook:** `playbooks/actual.yaml`
- **Defaults File:** `roles/actualbudget/defaults/main.yaml`

### Vaultwarden
- **Container Image:** `docker.io/vaultwarden/server`
- **Playbook:** `playbooks/vaultwarden.yaml`
- **Defaults File:** `roles/vaultwarden/defaults/main.yaml`

### Vikunja
- **Container Image:** `docker.io/vikunja/vikunja`
- **Playbook:** `playbooks/vikunja.yaml`
- **Defaults File:** `roles/vikunja/defaults/main.yaml`
