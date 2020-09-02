// Saves options to chrome.storage
function save_options() {
  var darkGithub       = document.getElementById('dark_github').checked;
  var darkSemaphore    = document.getElementById('dark_semaphore').checked;
  var darkLogentries   = document.getElementById('dark_logentries').checked;
  var darkThundertix   = document.getElementById('dark_thundertix').checked;
  var darkThunderstage = document.getElementById('dark_thunderstage').checked;
  var darkThunderlocal = document.getElementById('dark_localthundertix').checked;
  chrome.storage.sync.set({
    darkGithub: darkGithub,
    darkSemaphore: darkSemaphore,
    darkLogentries: darkLogentries,
    darkThundertix: darkThundertix,
    darkThunderstage: darkThunderstage,
    darkThunderlocal: darkThunderlocal
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    darkGithub: false,
    darkSemaphore: false,
    darkLogentries: false,
    darkThundertix: false,
    darkThunderstage: false,
    darkThunderlocal: false
  }, function(items) {
    document.getElementById('dark_github').checked          = items.darkGithub;
    document.getElementById('dark_semaphore').checked       = items.darkSemaphore;
    document.getElementById('dark_logentries').checked      = items.darkLogentries;
    document.getElementById('dark_thundertix').checked      = items.darkThundertix;
    document.getElementById('dark_thunderstage').checked    = items.darkThunderstage;
    document.getElementById('dark_localthundertix').checked = items.darkThunderlocal;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
