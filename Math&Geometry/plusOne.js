class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let val = 1;
        let num;
        for(let i = digits.length - 1; i >= 0; i--){
            num = digits[i] + val;
            if(num > 9){
                const carry = num % 10;
                digits[i] = carry;
                val = (num - carry)/10;
            }
            else{
                digits[i] = num;
                val = 0;
                break;
            }
        }

        if(val !== 0){
            digits.unshift(val);
        }

        return digits;

    }
}
