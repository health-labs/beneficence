export const nameIcon = (name: string, color: string) => {
  const nameArray = name.split(' ');
  const l = nameArray.length;
  const firstName = nameArray[0];
  const lastName = l === 1 ? '' : nameArray[l - 1];
  return `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=${color}&color=fff&size=34`;
};

export const rgbaToHex = (rgb: string) => {
  const rem = rgb.substring(5, rgb.length - 1);
  const rgbArr = rem.split(',');
  const r = rgbArr[0];
  const g = rgbArr[1];
  const b = rgbArr[2];
  const hex = [r, g, b]
    .map((x) => {
      const hx = Number(x).toString(16);
      return hx.length === 1 ? `0${hx}` : hx;
    })
    .join('');
  return hex;
};

export const calcProgressPercent = (raised: number, goal: number) => {
  return Math.round((raised / goal) * 100);
};
