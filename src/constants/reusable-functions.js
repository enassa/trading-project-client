export const makeCall = (phoneNumber) => {
  window.open(`tel:${phoneNumber}`, "_self");
};
