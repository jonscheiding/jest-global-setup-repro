#!/bin/bash

COMMANDS=(
  "pnpm jest"
  "pnpm jest packages/package1"
  "pnpm jest --projects packages/package1"
  "cd packages/package1; pnpm jest"
)

for COMMAND in "${COMMANDS[@]}"; do
  rm -f .globalSetup
  echo "Running: $COMMAND"
  eval $COMMAND > /dev/null 2>/dev/null
  if [[ ! -f .globalSetup ]]; then
    echo "❌ .globalSetup file was not created! globalSetup was not called."
  else
    echo "✅ .globalSetup file was created."
  fi
done