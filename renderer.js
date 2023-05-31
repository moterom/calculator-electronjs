function appendToResult(value) {
    const result = document.getElementById('result');
    result.value += value;
  }
  
  function calculate() {
    const result = document.getElementById('result');
    const expression = result.value;
  
    try {
      const resultValue = eval(expression);
      result.value = resultValue;
    } catch (error) {
      result.value = 'Error';
    }
  }
  
  function clearResult() {
    const result = document.getElementById('result');
    result.value = '';
  }
  