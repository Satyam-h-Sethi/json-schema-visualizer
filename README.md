# json-schema-visualizer

[![Live Demo](https://img.shields.io/badge/Live_Demo-schema.satyamsethi.dpdns.org-3b82f6?style=for-the-badge&logo=cloudflare&logoColor=white)](https://schema.satyamsethi.dpdns.org)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-Deployment-F38020?style=for-the-badge&logo=cloudflarepages&logoColor=white)](https://json-schema-visualizer.pages.dev)

An interactive developer tool to visually explore nested JSON objects, generate strict TypeScript interfaces, and export valid JSON Schema definitions in real time.

## 🌐 Live Demo

- **Primary Custom Domain**: [https://schema.satyamsethi.dpdns.org](https://schema.satyamsethi.dpdns.org)
- **Cloudflare Pages Direct**: [https://json-schema-visualizer.pages.dev](https://json-schema-visualizer.pages.dev)

## What it does

Parses raw JSON and instantly renders an interactive visual syntax tree with automatic type inference, TypeScript type definitions, and standard Draft-07 JSON Schema specifications.

## Features

- **Interactive Visual Tree**: Collapsible nodes with color-coded syntax and runtime type badges.
- **TypeScript Interface Generator**: Converts any JSON object into ready-to-use TypeScript interfaces.
- **JSON Schema Generator**: Exports standard JSON Schema Draft-07 representations.
- **Real-time syntax validation**: Instant feedback for syntax and parsing errors.

## Setup

Requires Node.js (v14+). Zero external dependencies.

```bash
cd json-schema-visualizer
```

## Run command

```bash
node index.js
# Open http://localhost:3000
```
*(Or open `index.html` directly in any web browser)*

## Example usage

```bash
# Start on custom port
node index.js 8080
```
