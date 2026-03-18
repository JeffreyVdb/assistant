---
name: container-explorer
description: Use this skill to explore and list tags for public repositories on the GitHub Container Registry (ghcr.io) and Docker Hub (docker.io).
---

# Container Explorer

This skill provides reliable methods to query container registries for available image tags.

## GitHub Container Registry (ghcr.io)

GHCR requires a two-step "auth dance" even for public repositories.

### 1. Get an Anonymous Pull Token
```bash
TOKEN=$(curl -s "https://ghcr.io/token?scope=repository:<IMAGE_PATH>:pull" | jq -r .token)
```

### 2. Query the Tags List
```bash
curl -s -H "Authorization: Bearer $TOKEN" https://ghcr.io/v2/<IMAGE_PATH>/tags/list | jq .
```

## Docker Hub (docker.io)

Docker Hub provides a simpler API for public repositories that doesn't require a token for metadata.

### Query the Tags List
```bash
curl -s "https://hub.docker.com/v2/repositories/<IMAGE_PATH>/tags/?page_size=25" | jq -r '.results[].name'
```
*Note: For "official" images (like Ubuntu), use `library/ubuntu` as the path.*

## Further Reading
- **Examples**: See [references/examples.md](references/examples.md) for specific repository patterns.
