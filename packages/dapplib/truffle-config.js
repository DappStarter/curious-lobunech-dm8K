require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note random unable install industry flee spider'; 
let testAccounts = [
"0x77155c7926c04c0d7bceb348a627cca80b3dfa1142cea9694aaa5c7ae453e4a3",
"0x4c27854116941ed2ba37d593c83f1358fe21da4248f2dbf4c7391eda88d22323",
"0x5212991c49ef1da39e8eebd2cbc3ffacd9c6278dde1b92776c2d5d551b0e38c3",
"0x5375c94f819dac407fcfb504800a328eb8b9a728732b97527978c14ac1afd943",
"0x0776015aae24fd301ce41fb296391bf1c3804168142c4751ef05094da062f189",
"0xdd07d01d7aec69cf0f66061a727f0dbd56b90058a74e89208cc4c807f131690c",
"0x2c45f8a0d4b9d91d46ac6858405c6d77a933a0df08ace495d9a7be93e7bfc9f1",
"0x4d23afdc474e6fd644e27183018d138f333c164c652e39460f6d4bee6bdb6a29",
"0x720f0006e3a9938adf36af9c3fabd537667db9b4c8435f28467328250da00105",
"0xf54171111125fc00d3e03c9b4615a2f67003e5448cd71657213078f766c09430"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

