# Container Explorer Examples

## GitHub Container Registry (ghcr.io)

### Example: jeffreyvdb/life-tracker
```bash
TOKEN=$(curl -s "https://ghcr.io/token?scope=repository:jeffreyvdb/life-tracker:pull" | jq -r .token)
curl -s -H "Authorization: Bearer $TOKEN" https://ghcr.io/v2/jeffreyvdb/life-tracker/tags/list | jq .
```

### Example: home-assistant/core
```bash
TOKEN=$(curl -s "https://ghcr.io/token?scope=repository:home-assistant/core:pull" | jq -r .token)
curl -s -H "Authorization: Bearer $TOKEN" https://ghcr.io/v2/home-assistant/core/tags/list | jq .
```

## Docker Hub (docker.io)

### Example: vaultwarden/server
```bash
curl -s "https://hub.docker.com/v2/repositories/vaultwarden/server/tags/?page_size=10" | jq -r '.results[].name'
```

### Example: official redis image
```bash
curl -s "https://hub.docker.com/v2/repositories/library/redis/tags/?page_size=10" | jq -r '.results[].name'
```
