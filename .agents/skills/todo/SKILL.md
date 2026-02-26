---
name: todo
description: Use this skill when the user wants to be reminded of something, asks to create or schedule a task, or asks about tasks in general.
---

# Todo Manager

Use the Vikunja tools (`vikunja_task_crud`, `vikunja_tasks`, etc.) to manage tasks. All operations must target specific projects using IDs.

## Core Project Configuration (Dynamic)

This skill uses environment variables to protect sensitive project details. **Always check these variables before proceeding:**

- **Work Project:** Name stored in `$GEMINI_WORK_PROJECT_NAME`, ID in `$GEMINI_WORK_PROJECT_ID`.
- **Household Project:** ID `5`.
- **Inbox (Default):** ID `1`.

> **Note:** If environment variables are missing, ask the user to provide the Project ID for the specific context.

## Operational Guidelines

### 1. Listing Tasks (Default View)
- **Status Filter:** Always default to listing **open tasks only** (`done: false`) unless the user explicitly asks for completed tasks.
- **Explicit Project ID:** Never attempt a "list all" without a `projectId`. 
- **Example:** `vikunja_task_crud({ operation: "list", projectId: process.env.GEMINI_WORK_PROJECT_ID, done: false })`

### 2. Task Creation & Enrichment
- **Brussels Timezone:** All due dates must be calculated based on the Brussels timezone (CET/CEST).
- **Task Breakdown (ADHD Support):** If a task seems large, break it down into smaller subtasks using the `relate` subcommand with `relationKind: "subtask"`.
- **HTML Descriptions:** Use raw HTML in descriptions. **CRITICAL:** Do NOT escape HTML characters.
- **Contextual Search:** Before providing advice, use `vikunja_tasks({ subcommand: "get", id: <id> })` to read existing context.

### 3. Tool Selection
- Use `vikunja_task_crud` for standard CRUD.
- Use `vikunja_task_bulk` for multiple tasks.
- Use `vikunja_task_relations` for subtasks.
