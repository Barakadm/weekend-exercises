function Short(s){
    let arr = s.split(" ").sort((b, a) => a.length - b.length);
    return arr[0].length
    
  }


  console.log(Short('helghfhfhlo to you'));