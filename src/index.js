import md5 from 'crypto-js/md5';
import sha1 from 'crypto-js/sha1';
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import hmacMD5 from 'crypto-js/hmac-md5';
import hmacSHA1 from 'crypto-js/hmac-sha1';
import hmacSHA256 from 'crypto-js/hmac-sha256';
import hmacSHA224 from 'crypto-js/hmac-sha224';
import hmacSHA384 from 'crypto-js/hmac-sha384';
import hmacSHA3 from 'crypto-js/hmac-sha3';
import hmacRIPEMD160 from 'crypto-js/hmac-ripemd160';

import { default as md4 } from './md4';

import './index.css';

const selectElement = document.querySelector('.opcs');

selectElement.addEventListener('change', (event) => {
  let sel = document.querySelectorAll('option[name=option]');

  if (
    sel[0].selected ||
    sel[1].selected ||
    sel[2].selected ||
    sel[3].selected
  ) {
    document.querySelector('#key').disabled = true;
    document.querySelector('#key').value = '';
  } else if (
    sel[4].selected ||
    sel[5].selected ||
    sel[6].selected ||
    sel[7].selected ||
    sel[8].selected ||
    sel[9].selected ||
    sel[10].selected ||
    sel[11].selected
  ) {
    document.querySelector('#key').disabled = false;
  }
});

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
  } else if (seleccion[7].selected) {
    const clave = document.querySelector('#key').value;
    const digesthmacSHA256 = hmacSHA256(mensaje, clave);
    result.value = digesthmacSHA256.toString();
  } else if (seleccion[8].selected) {
    const clave = document.querySelector('#key').value;
    const digesthmacSHA224 = hmacSHA224(mensaje, clave);
    result.value = digesthmacSHA224.toString();
  } else if (seleccion[9].selected) {
    const clave = document.querySelector('#key').value;
    const digesthmacSHA384 = hmacSHA384(mensaje, clave);
    result.value = digesthmacSHA384.toString();
  } else if (seleccion[10].selected) {
    const clave = document.querySelector('#key').value;
    const digesthmacSHA3 = hmacSHA3(mensaje, clave);
    result.value = digesthmacSHA3.toString();
  } else if (seleccion[11].selected) {
    const clave = document.querySelector('#key').value;
    const digesthmacRIPEMD160 = hmacRIPEMD160(mensaje, clave);
    result.value = digesthmacRIPEMD160.toString();
  }
});
