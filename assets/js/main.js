$(document).ready(function () {
    $(function date() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['Jan', 'Feb', ' Mar', 'Apr', 'May', 'Jun', 'Jul', ' Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var now = new Date(Date.now());
        var year = now.getFullYear();
        var date = now.getDate();
        var day = days[now.getDay()];
        var month = months[now.getMonth()];
        $('.date-container').html(
            day + ', ' + date + ' ' + month + ' ' + year
        )
    })
    $(function burger() {
        $('.navbar-toggler').click(function () {
            $('#icon').toggleClass('fa-circle-up');
            $('#icon').toggleClass('fa-circle-down');
        })
    })
})