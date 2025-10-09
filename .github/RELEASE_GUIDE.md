# Release Guide

## Processo de Release Automatizado

### Opção 1: Release via Commit (Recomendado)

1. **Atualize a versão da biblioteca**:
   ```bash
   # Para patch (0.2.0 → 0.2.1)
   npm run version:patch

   # Para minor (0.2.0 → 0.3.0)
   npm run version:minor

   # Para major (0.2.0 → 1.0.0)
   npm run version:major
   ```

2. **Commit e push para master**:
   ```bash
   git add .
   git commit -m "bump: version to X.X.X"
   git push origin master
   ```

3. **A pipeline automaticamente**:
   - ✅ Executa testes
   - ✅ Faz build da biblioteca
   - ✅ Publica no npm (se versão for nova)
   - ✅ Cria release no GitHub

### Opção 2: Release via Tag

1. **Crie e push uma tag**:
   ```bash
   git tag v0.2.1
   git push origin v0.2.1
   ```

2. **A pipeline de release executa automaticamente**

### Opção 3: Release Manual Local

```bash
# Testa, builda e publica tudo
npm run release
```

## Verificações Antes do Release

### ✅ Checklist
- [ ] Todos os testes passando (`npm run test:docker`)
- [ ] Build da lib funcionando (`npm run build:lib`)
- [ ] Build do exemplo funcionando (`npm run build`)
- [ ] Documentação atualizada (README.md)
- [ ] Versão incrementada no `projects/ngx-triple-ssp/package.json`

### Comandos de Validação
```bash
# Roda todos os testes
npm run test:docker

# Verifica se a lib builda corretamente
npm run build:lib

# Verifica se o exemplo funciona
npm run build && npm start
```

## Versionamento Semântico

Seguimos o padrão [Semantic Versioning](https://semver.org/):

- **PATCH** (0.2.0 → 0.2.1): Bug fixes e correções
- **MINOR** (0.2.0 → 0.3.0): Novas funcionalidades compatíveis
- **MAJOR** (0.2.0 → 1.0.0): Mudanças que quebram compatibilidade

## Monitoramento

- **GitHub Actions**: [Actions Tab](../../actions)
- **npm Package**: [npmjs.com/package/ngx-triple-ssp](https://www.npmjs.com/package/ngx-triple-ssp)
- **Releases**: [GitHub Releases](../../releases)

## Troubleshooting

### Pipeline falha no publish
1. Verifique se o `NPM_TOKEN` está configurado nos secrets
2. Confirme se a versão foi incrementada
3. Verifique se não existe conflito de versão no npm

### Testes falhando
1. Execute localmente: `npm run test:docker`
2. Corrija os erros encontrados
3. Faça novo commit
