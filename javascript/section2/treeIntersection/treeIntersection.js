function intersect(nums1, nums2) {
    let num1Hash = {};
    for (let num of nums1) {
      if (num1Hash[num]) {
        num1Hash[num]++;
      } else {
        num1Hash[num] = 1;
      }
    }
  
    let result = [];
  
    for (let num of nums2) {
      if (num1Hash[num] && num1Hash[num] > 0) {
        result.push(num);
        num1Hash[num]--;
      }
    }
    return result;
  }
  