import md5 from 'crypto-js/md5';
import sha1 from 'crypto-js/sha1';
import sha256 from 'crypto-js/sha256';

import { default as md4 } from './md4';
import { suma } from './suma';

import './index.css';

const btn = document.querySelector('button');
const rpta = document.querySelector('#md5');

btn.addEventListener('click', function () {
  const text = document.querySelector('#texto').value;

  const digestMD4 = md4(text);
  const digestMD5 = md5(text);
  const digestSHA1 = sha1(text);
  const digestSHA256 = sha256(text);

  rpta.value = digestMD5.toString();

  console.log('Cadena:', text);
  console.log('MD4', digestMD4);
  console.log('MD5', digestMD5.toString());
  console.log('SHA1', digestSHA1.toString());
  console.log('SHA256', digestSHA256.toString());
});

suma();
