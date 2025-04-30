document.getElementById('dashboard-link').addEventListener('click', function() {
  document.getElementById('page-content').innerHTML = '<h2>ড্যাশবোর্ড</h2><p>এখানে আপনার পয়েন্ট এবং ব্যালেন্স দেখা যাবে।</p>';
});

document.getElementById('start-task-link').addEventListener('click', function() {
  document.getElementById('page-content').innerHTML = '<h2>টাস্ক শুরু করুন</h2><p>এখানে আপনি নতুন CAPTCHA টাস্ক সমাধান করতে পারবেন।</p>';
});

document.getElementById('withdraw-link').addEventListener('click', function() {
  document.getElementById('page-content').innerHTML = '<h2>উইথড্র</h2><p>এখানে আপনি আপনার পয়েন্ট অথবা INR উত্তোলন করতে পারবেন।</p>';
});

document.getElementById('history-link').addEventListener('click', function() {
  document.getElementById('page-content').innerHTML = '<h2>ইতিহাস</h2><p>এখানে আপনি আপনার প past ইতিহাস দেখতে পারবেন।</p>';
});

document.getElementById('profile-link').addEventListener('click', function() {
  document.getElementById('page-content').innerHTML = '<h2>প্রোফাইল</h2><p>এখানে আপনি আপনার প্রোফাইল এবং তথ্য দেখতে পারবেন।</p>';
});

document.getElementById('exit-link').addEventListener('click', function() {
  document.getElementById('page-content').innerHTML = '<h2>বাহির যান</h2><p>আপনি সাইট থেকে বের হয়ে যাবেন।</p>';
});

