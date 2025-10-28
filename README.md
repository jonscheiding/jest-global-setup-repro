# Jest inconsistent globalSetup behavior

Clone/install this repo, then run `./repro.sh`.

Expected output:

```bash
Running: pnpm jest
✅ .globalSetup file was created.
Running: pnpm jest packages/package1
✅ .globalSetup file was created.
Running: pnpm jest --projects packages/package1
✅ .globalSetup file was created.
Running: cd packages/package1; pnpm jest
✅ .globalSetup file was created.
```

Actual output:

```bash
Running: pnpm jest
✅ .globalSetup file was created.
Running: pnpm jest packages/package1
✅ .globalSetup file was created.
Running: pnpm jest --projects packages/package1
❌ .globalSetup file was not created! globalSetup was not called.
Running: cd packages/package1; pnpm jest
❌ .globalSetup file was not created! globalSetup was not called.
```
