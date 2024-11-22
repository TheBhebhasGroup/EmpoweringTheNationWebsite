window.addEventListener('load', function () {
    "use strict";
  
    const form = document.getElementById('BookingForm');  
    const calculateButton = document.getElementById('checkValue');  
    const totalField = document.getElementById('total');  
  
    calculateButton.onclick = function () {
      let total = 0;
  
      const checkboxes = form.querySelectorAll('.item input[type="checkbox"]');
  
      checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
          total += parseFloat(checkbox.dataset.price);
        }
      });
  
      totalField.value = total.toFixed(2);
    };
  });
  