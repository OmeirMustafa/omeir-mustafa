$ErrorActionPreference = "Stop"

Write-Output "🚀 Starting CI/QA Sequence..."

# 1. Dependency Check (Optional/Warning only)
# Write-Output "📦 Running Dependency Check..."
# npx depcheck --json > reports/depcheck.json

# 2. Linting
Write-Output "✨ Running Linter..."
npm run lint
if ($LASTEXITCODE -ne 0) { Write-Error "Linting failed!"; exit 1 }

# 3. Build Check
Write-Output "🏗️  Running Build..."
npm run build
if ($LASTEXITCODE -ne 0) { Write-Error "Build failed!"; exit 1 }

Write-Output "✅ QA Sequence Passed!"
exit 0
