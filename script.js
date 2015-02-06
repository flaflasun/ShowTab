var escapeHtml = function(str) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return str.replace(/[&<>"']/g, function(m) {
    return map[m];
  });
};

window.onload = function() {
  chrome.tabs.query({}, function(tabs){

    var elements = '';

    for(var i = 0; i < tabs.length; i++){
      elements += '<li class="tab-bar">';
      elements += '<img src="' + tabs[i].favIconUrl + '" width="16" class="favicon" />';
      elements += '<pre class="tab-title">' + escapeHtml(tabs[i].title) + '</pre>';
      elements += '<br>';
      elements += '<div class="clear"></div>';
      elements += '<pre class="tab-url">' + escapeHtml(tabs[i].url) + '</pre>';
      elements += '</li>';
    }
    document.getElementById('tab-list').innerHTML = elements;
  });
}
