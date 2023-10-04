document.addEventListener("DOMContentLoaded", function () {
    const leaveForm = document.getElementById("leave-form");
    const leaveRequests = document.getElementById("leave-requests");

    leaveForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const studentName = document.getElementById("student-name").value;
        const leaveType = document.getElementById("leave-type").value;
        const leaveDate = document.getElementById("leave-date").value;

        const leaveItem = document.createElement("li");
        leaveItem.innerHTML = `<strong>${studentName}</strong> requests a <strong>${leaveType}</strong> leave on ${leaveDate}`;
        leaveRequests.appendChild(leaveItem);

        leaveForm.reset();
    });
});
