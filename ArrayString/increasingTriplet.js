/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = nums[0];
    let second = Infinity;
    let third = Infinity;
    for(let i = 1; i < nums.length; i++){
         if(nums[i] < first) first = nums[i];
         if(first < nums[i] && nums[i] < second) second = nums[i];
         if(second < nums[i]) return true;            
    }
    
    return false;
};