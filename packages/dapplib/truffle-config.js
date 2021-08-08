require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth predict coach imitate prize fortune sentence'; 
let testAccounts = [
"0xe4ab3b363ecdb4e433c8bbee0920f9fcc6a2f7d8308e204ca9de1088f81a7b2c",
"0xb481fd753ea4cdecd25824a8ecc046d40a3004eb7b303bed89ab2aaa9ad50341",
"0x8b025224cf0dbd4ab1c22d374f53375f164d3c400344762675dbc44fed94ff1b",
"0x4a9c4c5f3028eb049fd9115779ffe8856b8c658facecf77dba5bf23e2c6a144a",
"0x9fd0c4c11203c936c9fedbe8b68114ac5ccc227055bebceacb8b8437032538a1",
"0xc7169975a026246472ec16fa40b2a5d7a0fc0ce549774a98f915ad955269e1f4",
"0xc8f6d78cc7700205c7e3e6b31bab319ffec89d9867d6f2f14188cbc555ea7b81",
"0x69c16ff4b633befc306a662695bb417d786845b4f8973afcb346f422d7f64176",
"0x32cdda7dc571fc8954c1ec102b8d04098404d41f1ff8bef2c1e6a8541f20d2d2",
"0xa7f48754e5791f35550a805adc7c7a575a3418b44cc0dbd2826372994ab702bc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

