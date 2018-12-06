
import readFileAsync from 'read-file-async'
const Part1 = async () =>{
    const buffer = await readFileAsync('./input.txt')
    const input = buffer.toString()

    const split = input.split('\n')
    let startFreq = 0
    for(const sp of split){
        startFreq += parseInt(sp)
    }
    console.log(startFreq)
}

export default Part1