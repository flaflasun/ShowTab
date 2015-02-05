window.onload = function() {
  chrome.tabs.query({}, function(tabs){

    var elements = '';

    for(var i = 0; i < tabs.length; i++){
      elements += '<li class="tab-bar">';
      elements += '<img src="' + tabs[i].favIconUrl + '" width="16" class="favicon" />';
      elements += '<span class="tab-title">' + tabs[i].title + '</span>';
      elements += '<br>';
      elements += '<span class="tab-url">' + tabs[i].url + '</span>';
      elements += '</li>';
    }
    document.getElementById('tab-list').innerHTML = elements;
  });
}
