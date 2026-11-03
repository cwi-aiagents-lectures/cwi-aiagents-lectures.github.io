# Handoff: set up a local LaTeX project

You are a coding agent, for example Claude Code or Codex. A participant of the course "AI Agents in Practice" (CWI, 2026) asked you to read this file and follow it. Work through the steps below in order. Talk to the user in plain, short sentences. The user may never have used LaTeX or a terminal before.

If you received this file through a tool that summarises web pages, for example Claude Code's WebFetch, stop and download the raw file first, then read all of it: `curl -L https://bilgehan.io/latex.md` (or `curl -L https://cwi-aiagents-lectures.github.io/handoff/latex-project.md`). The steps below must be followed exactly, not from a summary.

## Goal

At the end, the user has:

- one project folder on their own computer
- a `main.tex` that compiles, with a small figure drawn in LaTeX
- a `notes.md` for notes in Markdown
- a compiled `main.pdf` that is open on their screen
- a reusable skill, so next time they can set up a new project with one command.

## Rules for you, the agent

- **Ask before you install anything.** Show the exact command first and wait for a clear yes.
- **Ask before you use `sudo` or administrator rights.** Explain why they are needed.
- Never ask for, show or store passwords. If a command asks for a password, the user types it, not you.
- Do not put confidential, personal or participant data in this project. It is a practice project.
- Do not invent citations. If the user asks for references later, mark anything you have not checked.
- If a step fails, stop, say what happened in one or two sentences, and suggest the next step. Do not try many different fixes in a row without telling the user.
- If no person can answer your questions (for example in a scripted run), use the suggested defaults and do not install anything.

## Step 0. Say what you will do

Before you run anything, tell the user, in a few lines:

1. You will check whether LaTeX is installed.
2. If it is not, you will suggest how to install it, and ask before installing.
3. You will create a project folder, compile a first PDF and open it.
4. You will create a reusable skill for new projects.

Then ask for:

- the folder name (suggest `my-first-project`)
- where to create it (suggest the home folder or a `Projects` folder).

## Step 1. Detect the operating system

Run one of these and read the result:

- macOS or Linux: `uname -s`. `Darwin` means macOS. `Linux` means Linux.
- On Linux, read `/etc/os-release` and use the `ID` and `ID_LIKE` lines to find the family:
  - `debian` or `ubuntu`: Debian family
  - `fedora`, `rhel` or `centos`: Fedora family
  - `arch`: Arch family
  - `opensuse` or `suse`: openSUSE family.
- Windows: you are on Windows if the shell is PowerShell or `cmd`, or if `$env:OS` is `Windows_NT`.

Tell the user what you found.

## Step 2. Check whether LaTeX is already installed

Run:

```
pdflatex --version
latexmk -v
kpsewhich tikz.sty
```

- If `pdflatex` works, LaTeX is installed. **Skip Step 3.**
- If `pdflatex` works but `latexmk` does not, compile with `pdflatex` (see Step 5). This is normal with BasicTeX on macOS. Mention that `latexmk` can be added later, but do not push it.
- If `kpsewhich tikz.sty` prints nothing, the TikZ package is missing. You need it for the figure. Offer to install it (see Step 3).
- On macOS, if `pdflatex` is not found, also try `/Library/TeX/texbin/pdflatex --version`. LaTeX may be installed but not on the PATH of this shell. If so, use `/Library/TeX/texbin/` in front of every TeX command in the rest of the steps (`pdflatex`, `latexmk`, `kpsewhich`).
- If `kpsewhich` itself is not found but `pdflatex` works, skip the TikZ check. The compile in Step 5 will show whether TikZ is missing.

## Step 3. Install LaTeX (only if needed, and only after the user says yes)

Recommend a **medium-size** installation. Tell the user the size and that it can take a while to download. Show the command and wait for a yes.

### macOS

- **BasicTeX** (small, about 140 MB) from the TeX Users Group: https://www.tug.org/mactex/morepackages.html
  - with Homebrew: `brew install --cask basictex`
  - BasicTeX does not include `latexmk`. You can compile with `pdflatex` instead (see Step 5). To add it, or other missing packages, use `tlmgr install <package>`, for example `tlmgr install latexmk`. This usually needs administrator rights, so ask first.
- **MacTeX** (full TeX Live, over 6 GB) if the user wants everything: https://www.tug.org/mactex/
  - with Homebrew: `brew install --cask mactex-no-gui` (MacTeX without the GUI apps)
- Open a **new terminal window** after the installation, so the new commands are found.

### Linux

Use the distribution's own packages. The package manager shows the download size before it asks to confirm. Show that to the user.

- **Debian or Ubuntu:** `sudo apt install texlive-latex-recommended texlive-pictures latexmk`
  (TikZ is in `texlive-pictures`.)
- **Fedora or RHEL:** `sudo dnf install texlive-scheme-medium latexmk`
- **Arch:** `sudo pacman -S texlive-latexrecommended texlive-pictures texlive-binextra`
  (`latexmk` is in `texlive-binextra`.)
- **openSUSE:** `sudo zypper install texlive-scheme-medium texlive-latexmk texlive-pgf`

### Windows

- **MiKTeX** (basic installer, about 142 MB): https://miktex.org/download
  MiKTeX can install missing packages on first use. Tell the user that a window may pop up asking to install a package.
- **TeX Live** for Windows: https://www.tug.org/texlive/windows.html
  TeX Live is large (the full install is several GB) but includes everything.
- `latexmk` is a Perl script. If it fails with an error about Perl, either install Perl (Strawberry Perl, linked from https://www.perl.org/get.html) or simply compile with `pdflatex` instead.
- Open a **new terminal window** after the installation.

After installing, repeat Step 2 to confirm it works.

## Step 4. Create the project folder

Create the folder the user chose. If a folder with that name already exists, do not overwrite it. Ask the user for another name. Inside the new folder, create these files.

### `main.tex`

```latex
\documentclass[11pt]{article}
\usepackage{amsmath,amssymb}
\usepackage{graphicx}
\usepackage{tikz}

\title{My first project}
\author{Your name}
\date{\today}

\begin{document}
\maketitle

\section{Introduction}
This is my first LaTeX project, set up with an AI agent.
An equation:
\begin{equation}
  e^{i\pi} + 1 = 0.
\end{equation}

\section{A figure}
Figure~\ref{fig:example} is drawn in LaTeX with TikZ.

\begin{figure}[ht]
  \centering
  \begin{tikzpicture}[scale=1.2]
    \draw[->] (0,0) -- (4.2,0) node[right] {$x$};
    \draw[->] (0,0) -- (0,2.4) node[above] {$y$};
    \draw[thick,domain=0:4,smooth,variable=\x] plot ({\x},{0.12*\x*\x});
    \fill (2,0.48) circle (1.5pt) node[above left] {$(2, 0.48)$};
  \end{tikzpicture}
  \caption{A placeholder figure. Replace it with your own.}
  \label{fig:example}
\end{figure}

\end{document}
```

Ask the user for their name and put it in `\author{...}`. In the log of `notes.md`, write today's date.

### `notes.md`

```markdown
# Notes

## Working conventions
- One project folder. A new .tex file for each new task or idea.
- Notes go in this file, in Markdown.
- The agent reads files instead of me pasting them.
- No invented citations. Check every reference.
- Compile after every edit.

## Log
- (today's date) Project created.
```

### `.gitignore`

```
*.aux
*.log
*.out
*.toc
*.fls
*.fdb_latexmk
*.synctex.gz
*.bbl
*.blg
```

## Step 5. Compile

In the project folder, compile with `latexmk` if Step 2 found it:

```
latexmk -pdf main.tex
```

If `latexmk` is not available, run this twice instead:

```
pdflatex -interaction=nonstopmode main.tex
```

If the compile fails, read the end of `main.log`, explain the error to the user in one sentence and fix it. Missing packages are the most common cause.

Compiling also creates files such as `main.aux` and `main.log`. Tell the user these are normal helper files. The `.gitignore` already lists them.

## Step 6. Open the PDF

Open `main.pdf` with the default viewer:

- macOS: `open main.pdf`
- Linux: `xdg-open main.pdf`
- Windows: `Start-Process main.pdf` in PowerShell, or `start main.pdf` in cmd

Ask the user to confirm that they see the PDF with the figure.

## Step 7. Create a reusable skill

Create a skill, so the user can set up a new project later with one command. The skill does Steps 4 to 6 for a new folder. It does not reinstall LaTeX.

The skill lives in the agent's settings folder in the user's home. Writing there is protected, so the user will be asked to approve this one write. Tell them that before you write it.

- **Claude Code:** create `~/.claude/skills/new-project/SKILL.md`. The user then types `/new-project` in Claude Code.
- **Codex:** create `~/.agents/skills/new-project/SKILL.md`. The user then mentions it as `$new-project` in Codex.
- **Other agents:** save the same text as `new-project.md` in the user's home folder, and tell the user to ask the agent to read it when they want a new project.

Use this content (adjust the folder default if the user wants):

```markdown
---
name: new-project
description: Set up a new local LaTeX project folder with main.tex (with a TikZ figure), notes.md and a .gitignore, compile it and open the PDF. Use when the user asks for a new project, paper or idea folder.
---

# New LaTeX project

1. Ask the user for the folder name, the location and their name. If the folder already exists, do not overwrite it. Ask for another name.
2. In the new folder, create the three files below. Put the user's name in \author and today's date in the notes log.
3. Compile with `latexmk -pdf main.tex`. If latexmk is missing, run `pdflatex -interaction=nonstopmode main.tex` twice. Helper files like main.aux and main.log are normal.
4. Open main.pdf with the default viewer (`open` on macOS, `xdg-open` on Linux, `Start-Process` in PowerShell on Windows).
5. Conventions: one folder per project, a new .tex file for each new task or idea, notes in Markdown, read files instead of pasting, never invent citations, compile after edits.
6. Ask before installing anything or using sudo. No confidential data.

## main.tex

    \documentclass[11pt]{article}
    \usepackage{amsmath,amssymb}
    \usepackage{graphicx}
    \usepackage{tikz}
    \title{New project}
    \author{NAME}
    \date{\today}
    \begin{document}
    \maketitle
    \section{Introduction}
    Start writing here.
    \begin{figure}[ht]
      \centering
      \begin{tikzpicture}
        \draw[->] (0,0) -- (4,0) node[right] {$x$};
        \draw[->] (0,0) -- (0,2) node[above] {$y$};
      \end{tikzpicture}
      \caption{Placeholder figure.}
    \end{figure}
    \end{document}

## notes.md

    # Notes
    ## Log
    - DATE Project created.

## .gitignore

    *.aux
    *.log
    *.out
    *.toc
    *.fls
    *.fdb_latexmk
    *.synctex.gz
    *.bbl
    *.blg
```

Tell the user where you saved the skill and how to use it.

## Step 8. Finish

Tell the user, briefly:

- where the project folder is
- that the PDF compiled and is open
- how to start a new project next time (`/new-project` in Claude Code, `$new-project` in Codex)
- one tip: for each new task, ask for a new .tex file in this folder, and ask the agent to compile and check the PDF after each change.

<!--
Sources checked on 2 November 2026:
- BasicTeX (about 140 MB), MacTeX (full TeX Live, over 6 GB): https://www.tug.org/mactex/ and https://www.tug.org/mactex/morepackages.html
- Homebrew casks: https://formulae.brew.sh/cask/basictex and https://formulae.brew.sh/cask/mactex-no-gui
- tlmgr install: https://www.tug.org/texlive/doc/tlmgr.html
- Debian packages (TikZ files in texlive-pictures, latexmk): https://packages.debian.org/stable/texlive-pictures and https://packages.debian.org/stable/latexmk
- Fedora: https://packages.fedoraproject.org/pkgs/texlive/texlive-scheme-medium/ and https://packages.fedoraproject.org/pkgs/latexmk/latexmk/
- Arch (tikz.sty in texlive-pictures, latexmk in texlive-binextra): https://archlinux.org/packages/extra/any/texlive-pictures/ and https://archlinux.org/packages/extra/any/texlive-binextra/
- openSUSE Tumbleweed repository (texlive-scheme-medium, texlive-latexmk, texlive-pgf): https://download.opensuse.org/tumbleweed/repo/oss/noarch/
- MiKTeX basic installer (141.98 MB): https://miktex.org/download
- TeX Live on Windows (includes a minimal Perl, full install over 6 GB): https://www.tug.org/texlive/windows.html
- latexmk is a Perl script: https://ctan.org/pkg/latexmk
- Strawberry Perl for Windows: https://www.perl.org/get.html
- Claude Code personal skills at ~/.claude/skills/<name>/SKILL.md, invoked as /<name>, name and description front matter: https://code.claude.com/docs/en/skills
- Codex user skills at $HOME/.agents/skills, invoked as $<name>: https://learn.chatgpt.com/docs/build-skills
-->
