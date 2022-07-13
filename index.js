function strictEquals(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  }

  if (
    (Object.is(a, 0) && Object.is(-0, a)) ||
    (Object.is(-0, a) && Object.is(a, 0))
  ) {
    return true;
  } else {
    return Object.is(a, b);
  }
}
strictEquals();
