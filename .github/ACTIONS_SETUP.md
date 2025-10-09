# GitHub Actions Setup

Este projeto utiliza GitHub Actions para CI/CD automatizado. Para que as pipelines funcionem corretamente, você precisa configurar os seguintes secrets no repositório.

## Secrets Necessários

### 1. NPM_TOKEN

Para publicar automaticamente no npm, você precisa de um token do npm:

1. Acesse [npmjs.com](https://www.npmjs.com)
2. Vá em **Account Settings** → **Access Tokens**
3. Clique em **Generate New Token**
4. Escolha **Automation** (para CI/CD)
5. Copie o token gerado

### 2. Configurar Secret no GitHub

1. Vá para o repositório no GitHub
2. Clique em **Settings** → **Secrets and variables** → **Actions**
3. Clique em **New repository secret**
4. Nome: `NPM_TOKEN`
5. Value: Cole o token do npm
6. Clique em **Add secret**

## Workflows Configurados

### 1. CI/CD Pipeline (`ci-cd.yml`)
**Trigger**: Push ou PR para `master`/`main`

**Jobs**:
- ✅ **Test**: Executa testes automatizados
- ✅ **Build**: Compila a biblioteca e exemplo
- ✅ **Publish**: Publica no npm (apenas se a versão for nova)
- ✅ **Release**: Cria release no GitHub automaticamente

### 2. Release Pipeline (`release.yml`)
**Trigger**: Push de tag `v*` (ex: `v0.2.0`)

**Jobs**:
- ✅ **Test & Build**: Valida o código
- ✅ **Publish**: Publica no npm
- ✅ **GitHub Release**: Cria release com changelog

## Como Usar

### Publicação Automática via Commit
1. Faça suas alterações
2. Incremente a versão em `projects/ngx-triple-ssp/package.json`
3. Commit e push para `master`
4. A pipeline automaticamente:
   - Roda testes
   - Faz build
   - Publica no npm (se versão for nova)
   - Cria release no GitHub

### Publicação Automática via Tag
1. Crie uma tag de versão:
   ```bash
   git tag v0.2.0
   git push origin v0.2.0
   ```
2. A pipeline automaticamente publica e cria release

## Status da Pipeline

Você pode acompanhar o status das pipelines na aba **Actions** do repositório no GitHub.

## Arquivos de Pipeline

- `.github/workflows/ci-cd.yml` - Pipeline principal
- `.github/workflows/release.yml` - Pipeline de release por tag
