$(document).ready(function() {
    // Cargar datos desde JSON
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        success: function(data) {
            let tableBody = $('#data-table tbody');
            data.forEach(function(user) {
                let row = `<tr>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.address.city}</td>
                </tr>`;
                tableBody.append(row);
            });
        }
    });

    // Filtrar datos en la tabla
    $('#search').on('input', function() {
        let value = $(this).val().toLowerCase();
        $('#data-table tbody tr').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});
