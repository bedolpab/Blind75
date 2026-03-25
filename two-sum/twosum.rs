use std::collections::HashSet;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut set: HashSet<i32> = HashSet::new();

        for (i, &n) in nums.iter().enumerate() {
            let compl = target - n;

            if set.contains(&compl) {
                let j = nums.iter().position(|&x| x == compl).unwrap();
                return vec![j as i32, i as i32];
            }

            set.insert(n);
        }

        vec![]

    }
}