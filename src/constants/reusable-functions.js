export const makeCall = (phoneNumber) => {
  window.open(`tel:${phoneNumber}`, "_self");
};
export const isMappable = (array) => {
  //If it's not an array, return FALSE.
  if (!Array.isArray(array)) {
    return false;
  }
  //If it is an array, check its length property
  if (array.length === 0) {
    //Return TRUE if the array is empty
    return false;
  }
  //Otherwise, return FALSE.
  return true;
};

export const replaceSpaceWithUnderscore = (stringToReplace) => {
  let results;
  try {
    results = stringToReplace.replace(/ /g, "_");
  } catch {}
  return results;
};

export const replaceUnderscoreWithSpace = (stringToReplace) => {
  let results;
  try {
    results = stringToReplace.replace(/_/g, " ");
  } catch {}
  return results;
};
