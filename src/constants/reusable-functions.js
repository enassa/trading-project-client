export const makeCall = (phoneNumber) => {
  window.open(`tel:${phoneNumber}`, "_self");
};

export const isMappable = (array) => {
  if (!Array.isArray(array)) {
    return false;
  }
  if (array.length === 0) {
    return false;
  }
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

export const cssModules = (styleObject) => (classList) => {
  const generateClassString = (list, myClass) => {
    let output = list;
    if (output) {
      output += " "; // appends a space if list is not empty
    }
    if (Array.isArray(myClass)) {
      output += myClass.reduce(generateClassString, ""); // recursion to deal with Arrays
    } else if (styleObject[myClass]) {
      output += styleObject[myClass];
      // append styleObject['myClass'] value to the list if it is defined in styleObject
    } else if (typeof myClass === "string") {
      output += myClass; // append 'myClass' directly to the list
    }
    return output;
  };
  let classArray = classList.split(" ");
  return classArray.reduce(generateClassString, "");
};

export const deleteValueFromArray = (arr, value) => {
  let newArr = arr.filter((item) => item !== value);
  return newArr;
};

export const getWindowWidth = (e) => {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  return windowWidth;
};

export const checkRegexPattern = (myString, pattern) => {
  let regex = new RegExp(pattern);
  let regexState = regex.test(myString);
  return regexState;
};
export const emailRegex = (max = 50) => {
  return "^[A-Za-z0-9\\._%+-]+@[A-Za-z0-9\\.-]+\\.[A-Za-z]{2," + max + "}$";
};

export const createRipple = (event) => {
  console.log("clicked");
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");
  const ripple = button.getElementsByClassName("ripple")[0];
  if (ripple) {
    ripple.remove();
  }
  button.appendChild(circle);
};

export const searchContains = (dataToSearchIn, searchValue, property) => {
  try {
    let reg = new RegExp("[^,]*" + searchValue + "[^,]*", "ig");
    // console.log(dataToSearchIn)
    const searchResults = dataToSearchIn.filter((item) =>
      item[property].match(reg)
    );
    return searchResults;
  } catch {
    return;
  }
};
