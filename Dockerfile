FROM ubuntu:bionic
RUN apt-get -y update && apt-get -y install wget unzip python python3 openjdk-11-jre-headless gettext autogen autoconf libtool pkg-config
RUN wget https://s3.amazonaws.com/mozilla-games/emscripten/releases/emsdk-portable.tar.gz \
  && tar xzvf emsdk-portable.tar.gz
RUN cd emsdk-portable && ./emsdk install latest
RUN cd emsdk-portable && ./emsdk activate latest
RUN wget https://github.com/voikko/corevoikko/archive/rel-voikko-fi-2.3.zip \
  && unzip rel-voikko-fi-2.3.zip
RUN cd corevoikko-rel-voikko-fi-2.3/libvoikko/ \
  && ./autogen.sh
RUN wget https://www.puimula.org/htp/testing/voikko-snapshot-v5/dict.zip \
  && unzip dict.zip
RUN /bin/bash -c "source ./emsdk-portable/emsdk_env.sh && cd corevoikko-rel-voikko-fi-2.3/libvoikko && js/configure.sh && NODE_OPTIONS=--max_old_space_size=12000 js/build.sh embed"