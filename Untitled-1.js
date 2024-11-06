function redirectToPage() {
    document.getElementById('loader').style.display = 'block';
    setTimeout(function() {
        window.location.href = 'sina2.html'; // لینک به صفحه مورد نظر
    }, 2500); // مدت زمان انتظار 2 ثانیه
}
