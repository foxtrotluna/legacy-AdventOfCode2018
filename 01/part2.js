import readFileAsync from 'read-file-async'
const Part2 = async () =>{
    const buffer = await readFileAsync('./input.txt')
    const input = buffer.toString()

    const split = input.split('\n')
    let freq = 0
    const hadFrequencies = [freq] //Frequencies already processed
    let looping = true
    let loopCount = 0;
    while(looping){
        for(const sp of split){
            freq += parseInt(sp)
            if(hadFrequencies.includes(freq)){
                console.log('Part 2: '+freq)
                looping = false
                break;
            }
            hadFrequencies.push(freq)
        }
    }
}

export default Part2