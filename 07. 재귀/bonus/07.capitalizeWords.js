function capitalizeWords(arr){
  const result = [];

  function helper(helperInput){
    if(helperInput.length === 0) return;
    result.push(helperInput[0].toUpperCase());
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

capitalizeWords(['banana','orange','apple']);