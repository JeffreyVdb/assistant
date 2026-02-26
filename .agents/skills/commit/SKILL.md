---
name: commit
description: Use this skill when the user asks to commit changes to the code or prepare a commit.
---

# Commit

The user uses Jujutsu (`jj`) for version control, along with the Conventional Commits format.

## Commit Flow

When asked to commit changes, follow this exact sequence:

1. Create a clear and concise commit message using the Conventional Commits format.
2. Ensure that lines in the description and message are no longer than 100 characters.
3. Add the description to the current change:
   ```bash
   jj desc -m "type(scope): concise description of the change"
   ```
4. Commit the current change:
   ```bash
   jj commit
   ```
5. Set the `main` bookmark to the newly committed revision (which is now the parent of the new working copy, denoted by `@-`):
   ```bash
   jj bookmark set main -r @-
   ```
6. Push the `main` bookmark to the remote repository:
   ```bash
   jj git push -b main
   ```

## Commit Message Guidelines

- Use appropriate types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`.
- Keep the scope concise and relevant.
- Ensure the message accurately reflects the changes made.
- Do not exceed 100 characters per line.
