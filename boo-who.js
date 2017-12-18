function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return bool === true;
}

booWho(null);
// booWho(true) should return true.
// booWho(false) should return true. nope
// booWho([1, 2, 3]) should return false.