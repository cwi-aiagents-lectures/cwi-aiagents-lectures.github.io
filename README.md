# AI Agents in Practice — course website

Website for the CWI course *AI Agents in Practice* (November 2026 – January 2027),
served at <https://cwi-aiagents-lectures.github.io>.

Built with [Jekyll](https://jekyllrb.com) and deployed by GitHub Pages straight
from the `main` branch. No theme gem: layouts live in `_layouts/`, styles in
`assets/css/main.scss`.

## Run locally

Requires Ruby 3.x (see `.ruby-version`).

```sh
bundle config set --local path vendor/bundle   # once
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>.

## Editing content

| What | Where |
| --- | --- |
| Course-wide info (title, time, instructors) | `_config.yml` → `course:` |
| Homepage sections | `index.html` |
| One page per session | `_lectures/0N-*.md` |
| Further reading | `resources.md` |

Each session file has front matter for its date, room, summary, topic chips
and hands-on description. To publish slides after a session, add them under
`assets/slides/` and list them in that session's `materials:`:

```yaml
materials:
  - title: Slides (PDF)
    url: /assets/slides/01-fundamentals.pdf
```

Only PDFs in the repo root are git-ignored (that is where the course
description source lives); PDFs under `assets/` are published normally.

The calendar feed at `/calendar.ics` is generated from the session files.

## Deployment

`.github/workflows/pages.yml` builds the site on every push and pull request.
Pushes to `main` are deployed to GitHub Pages; pull requests are only built,
so a broken build shows up before merging. The repository's Pages source is
set to **GitHub Actions** (Settings → Pages).
