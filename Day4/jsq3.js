function groupAnagrams(strs) {
    const anagramGroups = {};

    strs.forEach(str => {
        const sorted = str.split('').sort().join('');
        if (!anagramGroups[sorted]) {
            anagramGroups[sorted] = [];
        }
        anagramGroups[sorted].push(str);
    });

    return Object.values(anagramGroups);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
