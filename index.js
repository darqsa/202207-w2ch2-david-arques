function strictEquals(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  }

  if (/-0|0/.test(a) || /-0|0/.test(b)) {
    return true;
  } else {
    return Object.is(a, b);
  }
}
strictEquals();
