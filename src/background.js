$( document ).ready(function() {
  // Logentries
  $("div.EventsCard--eventsTitle").after("<a href='javascript:void(0);' class='logentries-chrome-ext' style='font-size: 15px; white-space: nowrap;'>Expand All Results</a>");
  $(".logentries-chrome-ext").on("click", logentries_expand_results);

  function logentries_expand_results(){
    $(".r7-icon-search-rawlog-mag").click();
  }

  // Semaphore
  $("div#wait-info").before("<a href='javascript:void(0);' class='semaphore-chrome-ext' style='font-size: 15px; white-space: nowrap; float: right;'>Expand All Failures</a>");
  $(".semaphore-chrome-ext").on("click", semaphore_expand_failures);

  function semaphore_expand_failures(){
    $(".c-filter-projects_icon_failed").click();
    $(".c-results_list_command").click()
  }

  // Github
  $("div.pr-review-tools").after("<div class='float-right pr-review-tools'><button class='github-chrome-ext-load-all' style='font-size: 15px; white-space: nowrap;'>Expand All Changes</button></div>");

  $( ".github-chrome-ext-load-all" ).bind( "click", function() {
    $(".load-diff-button").click();
  });

  // GitHub add branch to Semaphore
  $(".tabnav-tabs").first().append(
    '<a title="Add this branch to Semaphore"' +
        'href="https://semaphoreci.com/thundertix_by_tds/thundertix/branches/new?branch%5Bname%5D=' + $("code.text-gray-dark").text() + '" ' +
        'class="tabnav-tab js-pjax-history-navigate warning" ' +
        'target="_blank">' +
      'Add to Semaphore' +
    '</a>'
    );

  var currentUrl = document.URL;
  var linkUrl = currentUrl.replace("https://semaphoreci.com/thundertix_by_tds/thundertix/branches/new?", "/thundertix_by_tds/thundertix/branches?");
  if(linkUrl.includes("/thundertix_by_tds/thundertix/branches?branch%5Bname%5D=")){
    $('a[href="' + linkUrl + '"]').closest("li").css("backgroundColor", "yellow");
    $('a[href="' + linkUrl + '"]').click();
  }
});
