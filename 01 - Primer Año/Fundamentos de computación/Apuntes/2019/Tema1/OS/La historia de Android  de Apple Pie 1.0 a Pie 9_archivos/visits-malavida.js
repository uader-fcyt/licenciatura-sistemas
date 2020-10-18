var Malavida = Malavida || {};

Malavida.objectToUrlParams = function (vObject) {
  lParams = [];
  for (var lKey in vObject) {
    lParams.push(encodeURIComponent(lKey) + "=" + encodeURIComponent(vObject[lKey]));
  }
  return lParams.join("&");
}

Malavida.addVisit = function (vData) {
  var lHttpRequest;
  var lBaseUrl = "https://actions.malavida.com/es/";
  var lFile = 'visits';
  var lExtension = 'php';
  
  if (XMLHttpRequest)
    lHttpRequest = new XMLHttpRequest();
  else if (ActiveXObject)
    lHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");

  if (!lHttpRequest)
    return;

  var lParams = this.objectToUrlParams(vData);

  lHttpRequest.open("POST", lBaseUrl + lFile + '.' + lExtension, true);
  lHttpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //lHttpRequest.setRequestHeader("Content-length", lParams.length);
  //lHttpRequest.setRequestHeader("Connection", "close");
  lHttpRequest.send(lParams);
};

