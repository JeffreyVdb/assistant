# JJ Revsets Reference

Revsets are a functional language used to select sets of revisions.

## Basic Selectors

- `@`: The working copy.
- `main`: The revision pointed to by the `main` bookmark.
- `<change-id>`: A specific revision (e.g., `abc`, `unxn`).
- `<commit-id>`: A specific commit hash.
- `description(substring:"text")`: Revisions whose description contains "text".
- `author("name")`: Revisions authored by "name".
- `mine()`: Revisions authored by you.

## Ranges and Operators

- `x::y`: Revisions that are descendants of `x` and ancestors of `y` (inclusive).
- `::x`: All ancestors of `x` (inclusive).
- `x::`: All descendants of `x` (inclusive).
- `x..y`: Ancestors of `y` that are not ancestors of `x`.
- `x | y`: Union of revisions in `x` and `y`.
- `x & y`: Intersection of revisions in `x` and `y`.
- `x ~ y`: Revisions in `x` that are not in `y`.

## Useful Patterns

- `mine() & ::@`: All of your changes in the current branch's history.
- `conflicted()`: Revisions that have conflicts.
- `empty()`: Revisions that have no changes compared to their parents.
- `bookmarks()`: Revisions pointed to by any bookmark.
