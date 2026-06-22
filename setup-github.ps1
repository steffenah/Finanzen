# ============================================================
#  Finanzen - Einmaliger GitHub-Anschluss
#  Vorher auf github.com ein LEERES Repo anlegen (ohne README),
#  z.B. mit dem Namen "Finanzen". Dann hier die URL eintragen.
# ============================================================
Set-Location $PSScriptRoot

# >>> HIER deine Repo-URL eintragen (von github.com kopiert): <<<
$RepoUrl = "https://github.com/steffenah/Finanzen.git"

if ($RepoUrl -like "*DEIN-*" -or [string]::IsNullOrWhiteSpace($RepoUrl)) {
    Write-Host "Bitte zuerst die Variable \$RepoUrl oben im Skript anpassen." -ForegroundColor Red
    pause; exit
}

git remote remove origin 2>$null
git remote add origin $RepoUrl
git branch -M main
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Fertig! GitHub ist verbunden." -ForegroundColor Green
    Write-Host "Ab jetzt einfach 'start.ps1' doppelklicken zum Synchronisieren." -ForegroundColor Cyan
} else {
    Write-Host "Push fehlgeschlagen - bitte Login/URL pruefen." -ForegroundColor Red
}
pause
