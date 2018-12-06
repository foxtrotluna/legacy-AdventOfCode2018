import readFileAsync from 'read-file-async'
const Part2 = async () =>{
    const buffer = await readFileAsync('./input.txt')
    const input = buffer.toString()

}

export default Part2