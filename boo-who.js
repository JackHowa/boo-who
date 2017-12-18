function booWho(input) {
  if (typeof input === "boolean") {
    // test if any bool object
    return true;
  }
  return input === true; // returns true based on evaluated value
}

booWho(null);
// booWho(true) should return true.
// booWho(false) should return true. yep in line 3 
// booWho([1, 2, 3]) should return false.
