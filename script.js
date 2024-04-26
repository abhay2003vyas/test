// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('qrdata')) {
      var qrData = JSON.parse(urlParams.get('qrdata'));
      document.getElementById('name').value = qrData.name || '';
      document.getElementById('address').value = qrData.address || '';
      document.getElementById('mobile').value = qrData.mobile || '';
      document.getElementById('email').value = qrData.email || '';
    }
  });
  