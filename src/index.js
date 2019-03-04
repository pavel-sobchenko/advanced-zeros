module.exports = function getZerosCount(number, base) {
    // your implementation
    let consist = {};
    //for (let i = 2; i <= base; i++){
        let next = base;
        for(let j = 2; next > 1;){
            if( next % j == 0 ) {
                if(!consist.hasOwnProperty(j)){
                    consist[j] = 1;
                } else {
                    consist[j] = consist[j] + 1;
                }
                next = next / j;
            } else {
                j++;
            }
        }
  // }

    
    let div = {};
    for(let key in consist){
        let len = 0;
        let pow = 1;
        let res = Math.floor(number / Math.pow(key, pow));
        while( res >= 1){
            len += res;
            pow++;
            res = Math.floor(number / Math.pow(key, pow));
        }
        if(consist[key] > 1){
          div[Math.pow(key, consist[key])] = Math.floor(len/consist[key]);
        } else {
            div[key] = len;
        }
    }

    let min = div[Object.keys(div)[0]];
    for (let key in div){
        if(div[key] < min){
            min = div[key];
        }
    }

    return min;
}