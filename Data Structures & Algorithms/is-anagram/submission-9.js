class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const map = new Map();

        for (const char of s) {
            if (map.has(char)) {
                map.set(char, map.get(char) + 1);
            } else {
                map.set(char, 1);
            }
        }

        for (const char of t) {
            const count = map.get(char)

            if(count === undefined) return false

            if(count === 1) {
                map.delete(char)
            } else {
                map.set(char, count - 1);
            }
        }

        return map.size === 0;
    }
}
