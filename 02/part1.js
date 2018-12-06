import readFileAsync from 'read-file-async'
const Part1 = async () =>{
    const buffer = await readFileAsync('./input.txt')
    const input = buffer.toString()
    let doublesCounter = 0 //Boxes with 2 duplicate letters
    let triplesCounter = 0 //Boxes with 3 duplicate letters
    for(const line of input.split('\n')){
        if(hasLetterCount(line,2)){
            doublesCounter++
        }
        if(hasLetterCount(line,3)){
            triplesCounter++
        }
    }
    console.log(doublesCounter*triplesCounter)
}

const hasLetterCount = (str,c) => {
    const counts = getCharCounts(str)
    for(const letter of Object.keys(counts)){
        if(counts[letter] === c){
            return true
        }   
    }
    return false
}

const getCharCounts = str =>{
    let output = {}
    for(const ch of str){
        if(output[ch]){
            output[ch]++
        }
        else{
            output[ch] = 1
        }
    }
    return output
}

export default Part1