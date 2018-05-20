##RRMinerPool
---------------

Usage
===

#### Requirements
* Coin daemon(s) (find the coin's repo and build latest version from source)
* [Node.js](http://nodejs.org/) v0.10+ ([follow these installation instructions](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager))
* [Redis](http://redis.io/) key-value store v2.6+ ([follow these instructions](http://redis.io/topics/quickstart))
* libssl required for the node-multi-hashing module
  * For Ubuntu: `sudo apt-get install libssl-dev`
* Boost is required for the cryptonote-util module
  * For Ubuntu: `sudo apt-get install libboost-all-dev`


##### Seriously
Those are legitimate requirements. If you use old versions of Node.js or Redis that may come with your system package manager then you will have problems. Follow the linked instructions to get the last stable versions.


[**Redis security warning**](http://redis.io/topics/security): be sure firewall access to redis - an easy way is to
include `bind 127.0.0.1` in your `redis.conf` file. Also it's a good idea to learn about and understand software that
you are using - a good place to start with redis is [data persistence](http://redis.io/topics/persistence).


#### 1) Downloading & Installing


Clone the repository and run `npm update` for all the dependencies to be installed:

```bash
git clone https://github.com/RRNCIO/RRMinerPool.git
cd pool

nvm install 0.10.48
nvm use 0.10.48
nvm alias default 0.10.48
nvm use default

npm update
```

#### 2) Configuration

```bash
1.Start daemon
2.打开钱包
3.修改config.json
    ·修改钱包地址
    ·修改各项参数配置
4.启动矿池
    ·node init.js
```