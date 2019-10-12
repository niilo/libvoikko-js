# Docker image to build libvoikko-js

Original build.sh is modified to compile without webassembly support.

```bash
# build libvoikko.js
docker build --no-cache -t niilo/voikkojs-build .
# copy libvoikko.js
docker run --rm niilo/voikkojs-build cat /corevoikko-rel-voikko-fi-2.3/libvoikko/js/js-libvoikko.js > ../lib/libvoikko-morpho.js
```

Libvoikko is licensed under GPL3,
https://github.com/voikko/corevoikko/blob/master/LICENSE
