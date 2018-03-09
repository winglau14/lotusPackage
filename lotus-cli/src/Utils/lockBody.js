export default (heigthValue,overflowValue) =>{
    if(heigthValue === 'auto' && overflowValue === 'auto'){
        document.body.className = '';
        document.documentElement.className = '';
    }else{
        document.body.className = 'lock-body';
        document.documentElement.className = 'lock-body';
    }
}