export const removeUnderScoreAddSpace = (str:string)=>{
  return str.replace(/[-_]/g, ' ');
}

export const firstLetterCapital = (str:string)=>{
  return  str.charAt(0).toLocaleUpperCase()+str.substring(1,str.length);
}