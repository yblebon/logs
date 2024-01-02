export const createHash = (str) => {
         if (str == "") return 0;
         let hashString = 0;
         for (let character of str) {
            let charCode = character.charCodeAt(0);
            hashString = hashString << 5 - hashString;
            hashString += charCode;
            hashString |= hashString;
         }
         return Math.abs(parseInt(hashString));
}

export const sortDate = (a,b) => {
    let dateA = new Date(a.upload_date);
    let dateB = new Date(b.upload_date);
    return dateA > dateB ? 1 : -1;  
}; 