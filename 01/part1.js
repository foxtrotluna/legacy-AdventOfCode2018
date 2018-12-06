import readFileAsync from 'read-file-async'
const Part1 = async () =>{
    const buffer = await readFileAsync('./input.txt')
    const input = buffer.toString()

    const split = input.split('\n')
    let freq = 0
    for(const sp of split){
        freq += parseInt(sp)
    }
    console.log('Part 1: '+freq)
}

export default Part1