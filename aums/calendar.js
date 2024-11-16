document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    function createCalendar(year, month) {
        const startDate = new Date(year, month, 1);
        const endDate = new Date(year, month + 1, 0);
        const daysInMonth = endDate.getDate();

        // Clear existing calendar
        calendar.innerHTML = '';

        // Create day headers
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        daysOfWeek.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = day;
            calendar.appendChild(dayElement);
        });

        // Fill in the calendar with days
        for (let i = 1; i <= daysInMonth; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = i;
            if (year === currentYear && month === currentMonth && i === today.getDate()) {
                dayElement.classList.add('today');
            }
            calendar.appendChild(dayElement);
        }
    }

    createCalendar(currentYear, currentMonth);
});