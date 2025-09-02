# Welcome to nls-document-viewer

This is a nls-document-viewer project for nls-document

## 開発環境

以下のように環境構築を行います

- asdf
- asdf plugin add nodejs
- asdf install nodejs <version>
- asdf plugin add pnpm
- asdf install pnpm latest

## 開発用セットアップ

プロジェクト構築後に、以下の手順で実行環境を構築します

```bash
cd <your-project-name>

# Install dependencies
pnpm install

# copy env.local for development
cp .env.example .env.local

# Generate prisma schema
pnpm prisma:generate

# Migrate prisma schema to local db
pnpm prisma:migrate:dev

# Seed local db
pnpm prisma:db:seed

# Run formatting and linting (automatically runs on commit)
pnpm run lint
pnpm run lint:fix
pnpm run format
pnpm run format:fix

# Run typecheck
pnpm run typecheck
pnpm run typecheck:full

# Run lint and format before commit
pnpm run prepare

# Run dev
pnpm run dev

# Run build
pnpm run build

# Run Production
pnpm start

```

## DB接続

```bash
# dbコンテナのpgに接続する
psql -h db -U user -d mydatabase

```

or

```bash
pgadmin

```

## VSCodeでのDevcontainerを利用した開発用セットアップ

VSCodeの場合、Devcontainerを開きます
