import md5 from 'crypto-js/md5';
import sha1 from 'crypto-js/sha1';
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import hmacMD5 from 'crypto-js/hmac-md5';
import hmacSHA1 from 'crypto-js/hmac-sha1';

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
  } else if (seleccion[4].selected) {
    const clave = document.querySelector('#key').value;
    const digesthmacsha512 = hmacSHA512(mensaje, clave);
    result.value = digesthmacsha512.toString();
  } else if (seleccion[5].selected) {
    const clave = document.querySelector('#key').value;
    const digesthmacMD5 = hmacMD5(mensaje, clave);
    result.value = digesthmacMD5.toString();
  } else if (seleccion[6].selected) {
    const clave = document.querySelector('#key').value;
    const digesthmacSHA1 = hmacSHA1(mensaje, clave);
    result.value = digesthmacSHA1.toString();
  }
});
