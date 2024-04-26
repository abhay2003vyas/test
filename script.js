// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Function to parse URL parameters
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  // Fill form fields with data from QR code if available
  var qrData = getUrlParameter('qrdata');
  if (qrData) {
    try {
      var decodedData = JSON.parse(qrData);
      document.getElementById('name').value = decodedData.name || '';
      document.getElementById('address').value = decodedData.address || '';
      document.getElementById('mobile').value = decodedData.mobile || '';
      document.getElementById('email').value = decodedData.email || '';
    } catch (error) {
      console.error('Error parsing JSON data:', error);
    }
  }
});
