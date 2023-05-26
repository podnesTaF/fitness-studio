// Author: Francesco Chrabieh
$(document).ready(function() {
    const today = new Date();
    const date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
    $('#currentDate').text(date);
});
