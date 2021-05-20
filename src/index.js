export default {
    largeNumAdd(a, b){
        let alen = a.length - 1;
        let blen = b.length - 1;
        let carry = 0;
        let ret = '';
        while(alen >= 0 || blen >= 0){
            let x = 0;
            let y = 0;
            let sum;
            if(i >= 0){
                x=a[i] - '0';
                i--;
            }
            if(j >= 0){
                y=b[j] - '0';
                j--;
            }
            sum = x + y + carry;
            if(sum >= 10){
                carry = 1;
                sum -= 10
            } else {
                carry = 0;
            }
            ret = sum + ret;
        }
        if(carry){
            ret = carry + ret;
        }
        return ret;
    }
}
