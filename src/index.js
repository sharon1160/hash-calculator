import md5 from 'crypto-js/md5';
import sha1 from 'crypto-js/sha1';
import sha256 from 'crypto-js/sha256';

import { default as md4 } from './md4';

import './index.css';

const btn = document.querySelector('#btn-calcular');
const result = document.querySelector('#resultado');

btn.addEventListener('click', function () {
  const mensaje = document.querySelector('#message').value;
  let seleccion = document.querySelectorAll('option[name=option]');

  const digestMD4 = md4(mensaje);
  const digestMD5 = md5(mensaje);
  const digestSHA1 = sha1(mensaje);
  const digestSHA256 = sha256(mensaje);

  if (seleccion[0].selected) {
    result.value = digestMD4.toString();
  } else if (seleccion[1].selected) {
    result.value = digestMD5.toString();
  } else if (seleccion[2].selected) {
    result.value = digestSHA1.toString();
  } else if (seleccion[3].selected) {
    result.value = digestSHA256.toString();
  }
});
