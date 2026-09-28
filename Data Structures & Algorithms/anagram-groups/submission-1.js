class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();

        for (const word of strs) {
            const counts = Array(26).fill(0);

            for (const char of word) {
                const index = char.charCodeAt(0) - "a".charCodeAt(0);
                counts[index]++;
            }

            const key = counts.join("#");

            if (!groups.has(key)) {
                groups.set(key, []);
            }

            groups.get(key).push(word);
        }

        return [...groups.values()]
    }
}
