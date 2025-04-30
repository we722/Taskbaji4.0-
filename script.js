// Define the page content sections
const pages = {
  dashboard: '<h2>ড্যাশবোর্ড</h2><p>এখানে আপনার পয়েন্ট এবং ব্যালেন্স দেখা যাবে।</p>',
  startTask: '<h2>টাস্ক শুরু করুন</h2><p>এখানে আপনি নতুন CAPTCHA টাস্ক সমাধান করতে পারবেন।</p>',
  withdraw: '<h2>উইথড্র</h2><p>এখানে আপনি আপনার পয়েন্ট অথবা INR উত্তোলন করতে পারবেন।</p>',
  history: '<h2>ইতিহাস</h2><p>এখানে আপনি আপনার পূর্ববর্তী টাস্ক ইতিহাস দেখতে পারবেন।</p>',
  profile: '<h2>প্রোফাইল</h2><p>এখানে আপনি আপনার প্রোফাইল দেখতে পারবেন।</p>',
  exit: '<h2>বাহির যান</h2><p>আপনি সাইট থেকে বের হয়ে যাবেন।</p>'
};

// Function to change the content dynamically based on the link clicked
function changePage(page) {
  document.getElementById('page-content').innerHTML = pages[page];
}

// Add event listeners to the sidebar links
document.getElementById('dashboard-link').addEventListener('click', function() {
  changePage('dashboard');
});

document.getElementById('start-task-link').addEventListener('click', function() {
  changePage('startTask');
});

document.getElementById('withdraw-link').addEventListener('click', function() {
  changePage('withdraw');
});

document.getElementById('history-link').addEventListener('click', function() {
  changePage('history');
});

document.getElementById('profile-link').addEventListener('click', function() {
  changePage('profile');
});

document.getElementById('exit-link').addEventListener('click', function() {
  changePage('exit');
});
