import readFileAsync from 'read-file-async'
const Part2 = async () =>{
    const buffer = await readFileAsync('./input.txt')
    const input = buffer.toString()
    const split = input.split('\n')
    for(const line of split){
        if(checkDiffers(split,line)){
            break;
        }
    }

}

const checkDiffers = (list, toCheck) => {
    for(const line of list){
        let differences = 0
        if(line.length == toCheck.length){
            for(let i=0;i<line.length;i++){
                if(line[i] != toCheck[i]){
                    differences++
                }
            }
        }
        if(differences == 1){
            const diffC = getDiffChar(line,toCheck)
            const solution = getSolution(line, toCheck)
            console.log("Part 2 results: "+line+"-"+toCheck + ' Char: '+diffC)
            console.log("Part 2 Solution: "+ solution)
            return true
        }
    }
    return false
}

const getDiffChar = (str1,str2) => {
    for(let i=0;i<str1.length;i++){
        if(str1[i] != str2[i]){
            return str1[i]
        }
    }
}

const getSolution = (str1,str2) =>{
    for(let i=0;i<str1.length;i++){
        if(str1[i] != str2[i]){
            return str1.slice(0,i)+str1.slice(i+1)
        }
    }
}

export default Part2