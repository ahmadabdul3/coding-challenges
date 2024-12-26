
// - assume a string of length > 0 is passed
// - assume the substring length is < str.length
function findMostFrequentSubstring(str, substringLength) {
    console.clear();
    console.log('*** str length', str.length);

    const chunkMapping = {};
    let highestFreqChunk = {};
    let highestFreq = 0;
    let lowestOrder = 0;
    let order = 0;

    for (let i = 0; i < str.length; i++) {
        if (i > str.length - substringLength) {
            // - we're done
            break;
        }

        const chunk = str.slice(i, i + substringLength);
        let existingChunk = chunkMapping[chunk];

        if (!existingChunk) {
            existingChunk = { order, freq: 1, chunk };
            order += 1;
        } else {
            existingChunk.freq += 1;
        }

        const freq = existingChunk.freq;
        chunkMapping[chunk] = existingChunk;

        if (freq > highestFreq) {
            highestFreq = freq;

            highestFreqChunk = existingChunk;
            lowestOrder = existingChunk.order;
        } else if (freq === highestFreq) {
            if (existingChunk.order < highestFreqChunk.order) highestFreqChunk = existingChunk;
        }
    }

    console.log(chunkMapping);
    console.log('highest freq', highestFreq);
    console.log('highest freq chunk', highestFreqChunk);
}

findMostFrequentSubstring('rrheelloweeorrlleedrr', 2);