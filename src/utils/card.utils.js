export const splitCardNum = (cardNum) => {
  const slice1 = cardNum.slice(0, 4);
  const slice2 = cardNum.slice(4, 8);
  const slice3 = cardNum.slice(8, 12);
  const slice4 = cardNum.slice(12, 16);
  return ` ${slice1}  ${slice2}  ${slice3}  ${slice4}`;
};
