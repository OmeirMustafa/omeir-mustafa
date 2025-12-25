$ErrorActionPreference = "Stop"

Write-Output "Starting CI/QA Sequence..."

# 1. Dependency Check
Write-Output "Running Dependency Check..."
# We use cmd /c to ensure npx runs correctly in all shells
cmd /c npx depcheck --json > reports/depcheck.json

# 2. Linting
Write-Output "Running Linter..."
cmd /c npm run lint > reports/lint-report.txt
if ($LASTEXITCODE -ne 0) { Write-Error "Linting failed!"; exit 1 }

# 3. Build Check
Write-Output "Running Build..."
cmd /c npm run build
if ($LASTEXITCODE -ne 0) { Write-Error "Build failed!"; exit 1 }

Write-Output "QA Sequence Passed!"
exit 0
