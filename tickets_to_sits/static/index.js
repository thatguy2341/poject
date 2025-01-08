document.addEventListener('DOMContentLoaded', function() {
    function adjustTicketSize() {
        const ticket = document.getElementById('ticket');
        if (window.innerWidth < 1000 || window.innerHeight < 1000) {
            ticket.style.width = '100vw';
            ticket.style.height = '90vh';
            ticket.style.maxWidth = '100vh';
            ticket.style.maxHeight = '100vh';
            ticket.style.borderRadius = '0';
        } else {
            ticket.style.width = '90vw';
            ticket.style.height = '80%';
            ticket.style.borderRadius = '10px';
            ticket.style.maxWidth = '80vh';
            ticket.style.maxHeight = '70vh';
        }
    }

    // Adjust size on initial load
    adjustTicketSize();

    // Adjust size on window resize
    window.addEventListener('resize', adjustTicketSize);
});
