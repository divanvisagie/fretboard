yarn build
cp build docs

$sourceDirectory  = "build\*"
$destinationDirectory = "docs\"

Copy-item -Force -Recurse -Verbose $sourceDirectory -Destination $destinationDirectory