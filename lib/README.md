# libvoikko-js

Example (main.ts):

```typescript
import Libvoikko from './libvoikko-morpho';

const voikko = new Libvoikko();
const v = voikko.init('fi');

const a = v.analyze('Nokialla');
console.log(a);
```

Transpile typescript and run with Node.js

```bash
npx -p typescript tsc --esModuleInterop --target es5 main.ts
node main.js
```
