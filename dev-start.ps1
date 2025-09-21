# Load environment variables from .env file
if (Test-Path .env) {
    Get-Content .env | ForEach-Object {
        if ($_ -match "^([^#][^=]*)\s*=\s*(.*)$") {
            $name = $matches[1].Trim()
            $value = $matches[2].Trim()
            Set-Item -Path "env:$name" -Value $value
        }
    }
}

# Get PORT from environment variable or default to 3000
$PORT = if ($env:PORT) { $env:PORT } else { "3000" }

Write-Host "Starting Next.js development server on port $PORT..."
next dev -p $PORT