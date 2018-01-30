# Brazukcoin-Blockchain-Explorer
Block explorer for Brazukcoin CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon brazukcoind. It should be accessible from the Internet. Run brazukcoind with open port as follows:
```bash
./brazukcoind --restricted-rpc --enable-cors=* --enable-blockchain-indexes --rpc-bind-ip=0.0.0.0 --rpc-bind-port=44043
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.
