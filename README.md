9# Valentinecoin-Blockchain-Explorer
Block explorer for Valentinecoin CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon valentinecoind. It should be accessible from the Internet. Run valentinecoind with open port as follows:
```bash
./valentinecoind --restricted-rpc --enable-cors=* --enable-blockchain-indexes --rpc-bind-ip=0.0.0.0 --rpc-bind-port=45889
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.
